import * as vscode from 'vscode';
import { deprecatedKeywordList, docList, internalKeywordList } from './dict';
import { regexNumber, regexHexColor, regexRep } from './regExp';

import { audioBgmCompletions, audioBgmPath, audioBgsCompletions, audioBgsPath, audioDubsCompletions, audioDubsPath, audioSECompletions, audioSEPath, graphicCGCompletions, graphicCGPath, graphicCharactersCompletions, graphicCharactersPath, graphicPatternFadeCompletions, graphicPatternFadePath, graphicUICompletions, graphicUIPath, scriptCompletions, scriptPath } from './../extension';

const delimiter = ['=', ':'];

export async function getBuffer(filePath: string) {
    return Buffer.from(await vscode.workspace.fs.readFile(vscode.Uri.file(filePath)));
}

export async function getFileStat(filePath: string) {
    try {
        return await vscode.workspace.fs.stat(vscode.Uri.file(filePath));
    } catch {
        return undefined;
    }
}

// Obsolete due to change of sub folder support
export function getFileName(name: string, fileList: vscode.CompletionItem[]) {
    name = name.toLowerCase();

    for (let i in fileList) {
        let element = fileList[i].insertText?.toString().toLowerCase()!;

        if (element?.startsWith(name)) {
            return element;
        }
    };

    return undefined;
}

export function getCompletion(name: string, fileList: vscode.CompletionItem[]) {
    name = name.toLowerCase();

    for (let i in fileList) {
        let element = fileList[i].insertText?.toString().toLowerCase()!;

        if (element?.startsWith(name)) {
            return fileList[i];
        }
    };

    return undefined;
}

export function getFileCompletionByType(type: FileType, fileName: string) {
    switch (type) {
        case FileType.characters:
            return getCompletion(fileName, graphicCharactersCompletions);
        case FileType.ui:
            return getCompletion(fileName, graphicUICompletions);
        case FileType.cg:
            return getCompletion(fileName, graphicCGCompletions);
        case FileType.patternFade:
            return getCompletion(fileName, graphicPatternFadeCompletions);
        case FileType.bgm:
            return getCompletion(fileName, audioBgmCompletions);
        case FileType.bgs:
            return getCompletion(fileName, audioBgsCompletions);
        case FileType.dubs:
            return getCompletion(fileName, audioDubsCompletions);
        case FileType.se:
            return getCompletion(fileName, audioSECompletions);
        // case FileType.video:
        case FileType.script:
            return getCompletion(fileName, scriptCompletions);
        default:
            return undefined;
    }
}

export function getLastIndexOfDelimiter(src: string, position: number) {
    let ret = -1;

    for (let i = 0; i < delimiter.length; i++) {
        let index = src.lastIndexOf(delimiter[i], position);
        if (index > -1) {
            ret = Math.max(ret, index);
        }
    }

    return ret;
}

export function getIndexOfDelimiter(src: string, position: number) {
    let ret = src.length;

    for (let i = 0; i < delimiter.length; i++) {
        let index = src.indexOf(delimiter[i], position);
        if (index > -1) {
            ret = Math.min(ret, index);
        }
    }

    return ret;
}

// position: position to start search
export function getParamAtPosition(src: string, position: number) {
    let start = getLastIndexOfDelimiter(src, position);
    let end = getIndexOfDelimiter(src, position);

    if (start === -1 || end === -1) {
        return undefined;
    }
    return src.substring(start + 1, end);
}

export function getAllParams(src: string) {
    let params: string[] = [];

    let start = -1;
    let end = -1;

    let lastChar = src[src.length - 1];

    if (!delimiter.includes(lastChar)) {
        src = src + delimiter[0];
    }

    for (let i = 0; i < src.length; i++) {
        for (let j = 0; j < delimiter.length; j++) {
            if (src[i] === delimiter[j]
                || i === src.length - 1) {
                start = end;
                end = i;

                params.push(src.substring(start + 1, end));
            }
        }
    }

    params.pop();

    return params;
}

// position: Nth param
export function getNthParam(src: string, position: number) {
    let count = 0;
    let start = 0;
    let end = 0;

    let lastChar = src[src.length - 1];

    if (!delimiter.includes(lastChar)) {
        src = src + delimiter[0];
    }

    for (let i = 0; i < src.length; i++) {
        for (let j = 0; j < delimiter.length; j++) {
            if (src[i] === delimiter[j]) {
                start = end;
                end = i;

                if (count === position) {
                    return src.substring(start + 1, end);
                }

                count++;
            }
        }
    }

    return undefined;
}

export function getNumberOfParam(src: string, countLast: boolean = false): number {
    let count = 0;

    for (let i = 0; i < src.length; i++) {
        if (delimiter.includes(src[i])) {
            count++;
        }
    }

    if (!countLast
        && delimiter.includes(src[src.length - 1])) {
        count--;
    }

    return count;
}

export function lineIncludeDelimiter(src: string): boolean {
    for (let i = 0; i < src.length; i++) {
        if (delimiter.includes(src[i])) {
            return true;
        }
    }

    return false;
}

export function lineValidForCommandCompletion(src: string): boolean {
    let include = lineIncludeDelimiter(src);
    let startWith = (src.startsWith("@") || src.startsWith("#"));

    //return (!include) && (!startWith);
    return (!include);
}

export function arrayHasValue(item: number, array: number[]): boolean;
export function arrayHasValue(item: string, array: string[]): boolean;
export function arrayHasValue(item: string | number, array: (string | number)[]): boolean {
    for (let i in array) {
        if (typeof item !== (typeof array[i])) {
            return false;
        }

        if (typeof item === "string") {
            if ((<typeof item>array[i]).toLowerCase() === item.toLowerCase()) {
                return true;
            }
        }

        else if (array[i] === item) {
            return true;
        }
    }

    return false;
}

export function getMapValue<V>(item: string, map: Map<string, V>): V | undefined {
    let ret: V | undefined = undefined;

    map.forEach((value, key) => {
        if (key.toLowerCase() === item.toLowerCase()) {
            ret = value;
        }
    });

    return ret;
}

export function getCommentList(item: string, commentList: docList): string[] | undefined {
    return getMapValue<string[]>(item, commentList);
}

export function getCompletionItem(item: string, commentList: docList) {
    let itemCompletion = new vscode.CompletionItem(item, vscode.CompletionItemKind.Method);

    itemCompletion.detail = "??????";
    itemCompletion.documentation = new vscode.MarkdownString();

    let comment = getCommentList(item, commentList);

    if (comment === undefined) {
        itemCompletion.documentation.appendMarkdown("??????????????????");
    } else {
        for (let j = 0; j < comment.length; j++) {
            itemCompletion.documentation.appendMarkdown(comment[j] + "\n\n");
        }
    }

    return itemCompletion;
}

export function getCompletionItemList(src: string[], commentList: docList) {
    let ret: vscode.CompletionItem[] = [];

    for (let i = 0; i < src.length; i++) {
        let completionItem = getCompletionItem(src[i], commentList);

        if (completionItem === undefined) {
            continue;
        }

        if (arrayHasValue(src[i], deprecatedKeywordList)
            || arrayHasValue(src[i], internalKeywordList)) {
            completionItem.tags = [vscode.CompletionItemTag.Deprecated];
        }

        ret.push(completionItem);
    }

    return ret;
}

export function getHoverContents(item: string, commentList: docList) {
    let ret: vscode.MarkdownString[] = [];
    let comment = getCommentList(item, commentList);

    if (comment === undefined) {
        ret.push(new vscode.MarkdownString("??????????????????"));
    } else {
        for (let j = 0; j < comment.length; j++) {
            ret.push(new vscode.MarkdownString(comment[j]));
        }
    }

    return ret;
}

export enum FileType {
    inValid,

    characters,
    ui,
    cg,
    patternFade,

    bgm,
    bgs,
    dubs,
    se,

    video,

    script,
    frame,
    label,
};

export function getType(linePrefix: string, getCommand: boolean = false) {
    const paramNum = getNumberOfParam(linePrefix, true);
    // image
    if (linePrefix.match(/(@Char|@Character|@CC|@CharChange|@CPF|@CPatternFade|@CPFI|@CPatternFadeIn|@CPFO|@CPatternFadeOut|@CharPF|@CharPatternFade)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.characters;
    }

    if (linePrefix.match(/(@Dia|@DiaChange|@Name|@NameChange)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.ui;
    }

    if (linePrefix.match(/(@Dia|@DiaChange|@Name|@NameChange)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.ui;
    }

    if (linePrefix.match(/(@CG|@CGChange|@CGPFI|@CGPatternFadeIn|@CGPFO|@CGPatternFadeOut)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.cg;
    }

    if (linePrefix.match(/(@CPF|@CPatternFade|@CPFI|@CPatternFadeIn|@CPFO|@CPatternFadeOut|@CGPFI|@CGPatternFadeIn|@CGPFO|@CGPatternFadeOut|@CharPF|@CharPatternFade)/gi)
        && (getCommand || (paramNum === 2))) {
        return FileType.patternFade;
    }

    if (linePrefix.match(/(@PF|@PatternFade|@PFO|@PatternFadeOut)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.patternFade;
    }

    // audio
    if (linePrefix.match(/(@P|@Play)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.inValid;
    }

    if (linePrefix.match(/(@BGM|@BgmLoop|@BgmPre|@BgmPreludeLoop)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.bgm;
    }

    if (linePrefix.match(/(@Bgs|@BgsLoop)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.bgs;
    }

    if (linePrefix.match(/(@Dub|@DubPlay)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.dubs;
    }

    if (linePrefix.match(/(@SE)/gi)
        && (getCommand || (paramNum === 1))) {
        return FileType.se;
    }

    if (linePrefix.match(/(@PV|@PlayVideo|@OV|@OpenVideo)/gi)) {
        return FileType.video;
    }

    if (linePrefix.match(/(#CJMP|#JMPCha)/gi)) {
        return FileType.script;
    }

    if (linePrefix.match(/(#FJMP|#JMPFra)/gi)) {
        return FileType.frame;
    }

    if (linePrefix.match(/(#Call|#JMP|#NJMP)/gi)) {
        return FileType.label;
    }

    return FileType.inValid;
}

export function getParamType() {

}

export function geInlayHintType() {

}

export function getCommandType(command: string) {
    return getType(command, false);
}

export function getFilePath(linePrefix: string, fileName: string) {
    let filePath = getFileCompletionByType(getType(linePrefix), fileName)?.sortText;

    return filePath;

    // switch (getType(linePrefix)) {
    //     case FileType.characters:
    //         realFileName = getFileName(fileName, graphicCharactersCompletions);
    //         filePath = graphicCharactersPath + "\\";

    //         break;
    //     case FileType.ui:
    //         realFileName = getFileName(fileName, graphicUICompletions);
    //         filePath = graphicUIPath + "\\";

    //         break;
    //     case FileType.cg:
    //         realFileName = getFileName(fileName, graphicCGCompletions);
    //         filePath = graphicCGPath + "\\";

    //         break;
    //     case FileType.patternFade:
    //         realFileName = getFileName(fileName, graphicPatternFadeCompletions);
    //         filePath = graphicPatternFadePath + "\\";

    //         break;
    //     case FileType.bgm:
    //         realFileName = getFileName(fileName, audioBgmCompletions);
    //         filePath = audioBgmPath + "\\";

    //         break;
    //     case FileType.bgs:
    //         realFileName = getFileName(fileName, audioBgsCompletions);
    //         filePath = audioBgsPath + "\\";

    //         break;
    //     case FileType.dubs:
    //         realFileName = getFileName(fileName, audioDubsCompletions);
    //         filePath = audioDubsPath + "\\";

    //         break;
    //     case FileType.se:
    //         realFileName = getFileName(fileName, audioSECompletions);
    //         filePath = audioSEPath + "\\";

    //         break;
    //     // case FileType.video:
    //     case FileType.script:
    //         realFileName = getFileName(fileName, scriptCompletions);
    //         filePath = scriptPath + "\\";

    //         break;
    //     default:
    //         return undefined;
    // }

    // if (realFileName === undefined) {
    //     return undefined;
    // }

    // return filePath + realFileName;
}

export function getUri(linePrefix: string, fileName: string) {
    let filePath = getFilePath(linePrefix, fileName);

    if (filePath === undefined) {
        return undefined;
    }

    return vscode.Uri.file(filePath);
};

export function getFileNameByType(type: FileType, fileName: string) {
    return getFileCompletionByType(type, fileName)?.insertText;

    // switch (type) {
    //     case FileType.characters:
    //         return getFileName(fileName, graphicCharactersCompletions);
    //     case FileType.ui:
    //         return getFileName(fileName, graphicUICompletions);
    //     case FileType.cg:
    //         return getFileName(fileName, graphicCGCompletions);
    //     case FileType.patternFade:
    //         return getFileName(fileName, graphicPatternFadeCompletions);
    //     case FileType.bgm:
    //         return getFileName(fileName, audioBgmCompletions);
    //     case FileType.bgs:
    //         return getFileName(fileName, audioBgsCompletions);
    //     case FileType.dubs:
    //         return getFileName(fileName, audioDubsCompletions);
    //     case FileType.se:
    //         return getFileName(fileName, audioSECompletions);
    //     // case FileType.video:
    //     case FileType.script:
    //         return getFileName(fileName, scriptCompletions);
    //     default:
    //         return undefined;
    // }
}

export function fileExists(type: FileType, fileName: string) {
    return getFileNameByType(type, fileName) !== undefined;
}

export function matchEntire(src: string, regex: RegExp) {
    let match = src.match(regex);

    if (match === null) {
        return false;
    }

    return match[0] === src;
}

export function strIsNum(src: string) {
    return matchEntire(src, regexNumber);
}

// iterateLines(document, (text, lineNumber
//     , lineStart, lineEnd
//     , firstLineNotComment) => {

//     });

export function iterateLines(document: vscode.TextDocument
    , callBack: (text: string, lineNum: number
        , lineStart: number, lineEnd: number
        , firstLineNotComment: number) => void) {
    let inComment: boolean = false;

    let beginRegex = /^#Begin/gi;
    let endRegex = /^#End/gi;
    let labelRegex = /^;.*/gi;
    let keyWordRegex = /^(((#CreateSwitch|#Call|#CMP|@SetBattleScript).*)|(.*JMP.*)|(#SkipAnchor|#Ret|#StopFF|#StopFastForward))/gi;

    let commentRegex = /(\/\/.*)|(\(.*)|(\/\*(?!\*\/)[^\*\/]*)|((?!\/\*)[^\/\*]*\*\/)/gi;

    // line starts with // ( /*
    // remove back
    let commentRegexRepBack = /(\/\/.*)|(\(.*)|(\/\*(?!\*\/)[^\*\/]*)/gi;
    // line starts with ...*/
    // remove beginning
    let commentRegexRepFront = /((?!\/\*)[^\/\*]*\*\/)/gi;

    let firstLineNotComment: number | undefined = undefined;

    for (let i = 0; i < document.lineCount; ++i) {
        const line = document.lineAt(i);

        if (!line.isEmptyOrWhitespace) {
            const text = line.text.trim();
            let textRemoveBack = text.replace(commentRegexRepBack, "").trim();
            let textRemoveFront = text;

            let textNoComment = textRemoveBack;

            // TODO ABC /* */ ACB
            if (inComment
                && text.match(commentRegexRepFront)) {
                inComment = false;
                textRemoveFront = text.replace(commentRegexRepFront, "").trim();
                textNoComment = textRemoveBack.replace(commentRegexRepFront, "").trim();
            }

            if (!inComment
                && textNoComment.length > 0) {
                const lineStart: number = line.firstNonWhitespaceCharacterIndex
                    + text.length - textRemoveFront.length;
                const lineEnd: number = lineStart + textNoComment.length;

                if (firstLineNotComment === undefined) {
                    firstLineNotComment = i;
                }

                callBack(textNoComment, i
                    , lineStart, lineEnd
                    , firstLineNotComment);
            }

            if (!inComment
                && !text.match(/\*\//gi)
                && text.match(/\/\*/gi)) {
                inComment = true;;
            }
        }
    }
}

export function currentLineNotComment(document: vscode.TextDocument, position: vscode.Position): undefined[] | [string, number, string, number] {
    const curLine = position.line;
    let curText = "";
    let curStart = 0;

    iterateLines(document, (text, lineNumber
        , lineStart, lineEnd
        , firstLineNotComment) => {
        if (lineNumber === curLine) {
            curText = text.toLowerCase();
            curStart = lineStart;
        }
    });

    if (curText === "") {
        return [undefined, undefined, undefined, undefined];
    }

    let curPos = position.character - curStart!;
    let curLinePrefix: string = curText.substring(0, curPos).trim().toLowerCase();

    return [curText, curStart, curLinePrefix, curPos];
}