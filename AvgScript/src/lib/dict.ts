/* eslint-disable @typescript-eslint/naming-convention */

export const sharpKeywordList: string[] = [
    'Settings',
    'Begin',
    'End',
    'Error',
    'NULL',
    'CacheClean',
    'UnSkipAble',
    'SkipAble',
    'SGO',
    'SetGlobalOffset',
    'TransitionSpeed',
    'ForceTransition',
    'Save',
    'Debug',
    'DebugOff',
    'DefineRGB',
    'MSG',
    'MSGClear',
    'StopFF',
    'StopFastForward',
    'DisableUI',
    'EnableUI',
    'FNT',
    'ForceNoTransition',
    'FNTO',
    'ForceNoTransitionOff',
    'EOF',
    'W',
    'Wait',
    'FW',
    'ForceWait',
    'Jmp',
    'NJMP',
    'Call',
    'Ret',
    'FJMP',
    'JmpFra',
    'CJMP',
    'JmpCha',
    'SJMP',
    'SkipJmp',
    'SkipAnchor',
    'CreateSwitch',
    'Switch',
    'UnlockAch',
    'AddToStat',
    'UnlockAppreciation',
    'UnlockAppreciation_Chapter',
    'UnlockAppreciation_Graphic',
    'UnlockAppreciation_Audio',
    'VNMode_Newline',
    'VNMode_ChangePage',
    'SetCapture',
    'CaptureSys',
    'SV',
    'SetValue',
    'SVV',
    'SetValueValue',
    'SVAB',
    'SetValueAB',
    'SSS',
    'SetStringString',
    'SSAB',
    'SetStringAB',
    'VA',
    'ValueAdd',
    'VAV',
    'ValueAddValue',
    'VS',
    'ValueSub',
    'VSV',
    'ValueSubValue',
    'VM',
    'ValueMul',
    'VMV',
    'ValueMulValue',
    'VD',
    'ValueDiv',
    'VAV',
    'ValueDivValue',
    'CMP',
    'CMPV',
    'CMPValue',
    'CMPVV',
    'CMPValueValue',
    'CMPAB',
    'CMPVAB',
    'CMPValueAB',
    'CMPSAB',
    'CMPStringAB',
    'CMPSS',
    'CMPStringString',
    'JE',
    'JA',
    'JB',
    'JNE',
    'DiaColor',
    'DiaSize',
    'DiaFont',
    'DiaShaderOn',
    'DiaShaderOff',
    'DiaOutColor',
    'DiaOutPixel',
    'NameColor',
    'NameSize',
    'NameFont',
    'NameShaderOn',
    'NameShaderOff',
    'NameOutColor',
    'NameOutPixel'];

export const atKeywordList: string[] = [
    'Dia',
    'DiaChange',
    'DiaTrans',
    'Name',
    'NameChange',
    'NameTrans',
    'TextFadeOut',
    'P',
    'Play',
    'Stop',
    'Se',
    'Bgm',
    'BgmLoop',
    'BgmPre',
    'BgmPreludeLoop',
    'BgmPause',
    'BgmResume',
    'BgmFadeOut',
    'Bgs',
    'BgsLoop',
    'BgsPause',
    'BgsResume',
    'BgsFadeOut',
    'Dub',
    'DubPlay',
    'DubSeque',
    'Ntk',
    'NtkChange',
    'PV',
    'PlayVideo',
    'OV',
    'OpenVideo',
    'CV',
    'CloseVideo',
    'VR',
    'VideoResume',
    'VP',
    'VideoPause',
    'VW',
    'VideoWait',
    'VL',
    'VideoLoop',
    'SVP',
    'SetVideoPos',
    'CreateBlur',
    'AddBlur',
    'RemoveBlur',
    'DestroyBlur',
    'BackZoomParam',
    'BackZoomReset',
    'BackZoom',
    'Shake',
    'ShakeDir',
    'KeepShake',
    'KeepShakeOff',
    'Fade',
    'DestroyFade',
    'PF',
    'PatternFade',
    'PFO',
    'PatternFadeOut',
    'Rain',
    'Snow',
    'Normal',
    'ToRain',
    'ToSnow',
    'ToNormal',
    'CrossFade',
    'KeepRes',
    'KeepResolution',
    'KeepResOff',
    'KeepResolutionOff',
    'Sepia',
    'SepiaToning',
    'ChangeSepiaStrength',
    'SetSepiaNoiseMotion',
    'ChangeSepiaNoiseMotionPeriod',
    'StrCenter',
    'StrBottom',
    'Str',
    'String',
    'CreateStr',
    'CreateString',
    'StrS',
    'StrSize',
    'StrF',
    'StrFont',
    'StrA',
    'StrAlpha',
    'StrC',
    'StrColor',
    'MS',
    'MoveStr',
    'DestroyStr',
    'DestroyString',
    'DestroyAllStr',
    'DestroyAllString',
    'Spe',
    'MO',
    'MoveObj',
    'CG',
    'CGChange',
    'CPF',
    'CPatternFade',
    'CPFI',
    'CPatternFadeIn',
    'CPFO',
    'CPatternFadeOut',
    'CGPFI',
    'CGPatternFadeIn',
    'CGPFO',
    'CGPatternFadeOut',
    'CharPF',
    'CharPatternFade',
    'Char',
    'Character',
    'CC',
    'CharChange',
    'CA',
    'CharAlpha',
    'CharRotate',
    'SetAutoArrange',
    'CD',
    'CharDispose',
    'CAD',
    'CharAllDispose',
    'MC',
    'MoveChar',
    'HideUI',
    'ShowUI',
    'Order',
    'Front',
    'Back',
    'Forward',
    'Backward'];

export const keywordList: string[] = sharpKeywordList.concat(atKeywordList);

export const settingsParamList: string[] = [
    "LangSwitchAble",
    "VNMode",
    "VN",
    "LiteMode",
    "Lite",
    "UnSkipAble",
    "NoHistory",
    "ResetHistory",
    "LoadOnCall",
    "LoadAtStart",
    "LoadAll",
    "EraseAtEnd",
    "EraseAtEOF",
];

export type docList = Map<string, string[]>;

export const settingsParamDocList = new Map<string, string[]>([
    ["Settings", ["在脚本的第一行可以使用`#Settings`指令对脚本进行设置，格式如下:"
        , "\t#Settings=Param1|Param2|..."
        , "其中不同参数使用`|`进行分割"]],

    ["LangSwitchAble", ["该脚本支持切换语言后读取"]],
    ["VN", ["启用Visual Novel模式"]],
    ["VNMode", ["启用Visual Novel模式"]],
    ["Lite", ["启用Lite模式，该模式下部分功能会被禁用"]],
    ["LiteMode", ["启用Lite模式，该模式下部分功能会被禁用"]],
    ["UnSkipAble", ["该脚本无法使用跳过按钮/快捷键跳过"
        , "若需要中途启用，可使用`#SkipAble`指令"]],
    ["NoHistory", ["禁用历史记录功能"]],
    ["ResetHistory", ["开始对话时重置历史记录"]],
    ["LoadOnCall", ["在第一次使用时读取并缓存"]],
    ["LoadAtStart", ["在读取脚本时即读取该场景中使用的所有图像素材并缓存"]],
    ["LoadAll", ["加载图像文件夹中的所有图像素材并缓存"]],
    ["EraseAtEnd", ["在退出后结束后清除缓存"]],
    ["EraseAtEOF", ["在脚本执行结束后清除缓存"]],
]);

export const langDocList = new Map<string, string[]>([
    // keywords_language
    ["Lang", ["语言前缀"]],
    ["ZH", ["中文"]],
    ["EN", ["English"]],
    ["JP", ["日本語"]],
    ["FR", ["français"]],
    ["RU", ["русский язык"]],
]);

export const commandDocList = new Map<string, string[]>([
    // keywords_region
    ["Begin", ["代码块开始/结束标志，允许你在编辑器中将代码段折叠，在引擎内部无任何效果"]],
    ["End", ["代码块开始/结束标志，允许你在编辑器中将代码段折叠，在引擎内部无任何效果"]],


    // keywords_system
    ["Error", ["\t#Error=ErrorPic.png"
        , "内部指令，当引擎报错时会显示`Data\Graphic\_Sys`下对应的错误提示`ErrorPic.png`"]],
    ["NULL", ["空指令，用于指令转译"]],
    ["CacheClean", ["\t#CacheClean=MemLimit"
        , "尝试清理未引用的缓存，直到当前内存占用低于`MemLimit`或无可清理缓存。`MemLimit = -1`将按照默认设置清理，`MemLimit = 0`将清理全部未引用缓存"
        , "注意:内存的分配与释放非常耗时，清理100MB内存大约需要10ms，可在黑屏淡出时进行清理，以避免可感知的卡顿，同时请尽量避免频繁清理"]],
    ["UnSkipAble", ["读取到该指令后，当前章节无法使用跳过按钮/快捷键跳过"]],
    ["SkipAble", ["允许当前使用跳过按钮/快捷键跳过，用于取消`#UnSkipAble`"]],
    ["SGO", ["\t#SGO=XOffset:YOffset"
        , "\t#SetGlobalOffset=XOffset:YOffset"
        , "设定演出对象的全局偏移量，特效、UI与字符串对象不受影响"]],
    ["SetGlobalOffset", ["\t#SGO=XOffset:YOffset"
        , "\t#SetGlobalOffset=XOffset:YOffset"
        , "设定演出对象的全局偏移量，特效、UI与字符串对象不受影响"]],
    ["TransitionSpeed", ["\t#TransitionSpeed=Value"
        , "更改不透明度叠化速度，默认为`10`"
        , "参数设定为`default`可重置默认值"]],
    ["ForceTransition", ["该指令会截取当前窗口，并按照`TransitionSpeed`指定的速度进行淡出，用于为无法创建叠化的指令(如`@Order`、`#DefineRGB`等)强制添加叠化"]],
    ["Save", ["保存中断存档"]],

    ["Debug", ["调试模式下无叠化显示调试参数"]],
    ["DebugOff", ["调试模式下无叠化关闭调试参数"]],
    ["DefineRGB", ["\t#DefineRGB=R:G:B"
        , "\t#DefineRGB=#FFFFFF"
        , "定义立绘的色调RGB值为`R:G:B/#FFFFFF`，无叠化更新所有立绘对象(非特殊非特效对象)的RGB参数。该指令通常用于根据背景光照情况调整立绘色调，可使用附带的`RGBDefiner`工具来直观的调整该参数"]],

    ["MSG", ["\t#MSG=Message"
        , "仅调试模式下可用，于调试输出中输出Message"]],
    ["MSGClear", ["仅调试模式下可用，清空调试输出，在翻页时会自动调用"]],
    ["StopFF", ["仅调试模式下可用，解析至该语句后，快进将会在下一句文本处停止"]],
    ["StopFastForward", ["仅调试模式下可用，解析至该语句后，快进将会在下一句文本处停止"]],
    ["DisableUI", ["禁用UI"]],
    ["EnableUI", ["启用UI"]],
    ["FNT", ["强制无叠化，强制无叠化状态在解析到文本后重置为关闭"]],
    ["ForceNoTransition", ["强制无叠化，强制无叠化状态在解析到文本后重置为关闭"]],

    ["FNTO", ["关闭强制无叠化"]],
    ["ForceNoTransitionOff", ["关闭强制无叠化"]],

    ["EOF", ["文件尾标志，普通模式下解析到该指令即返回报错信息`脚本文件结尾必须为有效跳转`，`Lite`模式下则为执行完成标记"]],
    ["W", ["\t#W=2000"
        , "\t#Wait=2000"
        , "等待指令:等待时间"
        , "等待指令只对**交叠淡化**有效"]],
    ["Wait", ["\t#W=2000"
        , "\t#Wait=2000"
        , "等待指令:等待时间"
        , "等待指令只对**交叠淡化**有效"]],

    ["FW", ["\t#FW=2000"
        , "\t#ForceWait=2000"
        , "强制等待指令:等待时间"
        , "强制等待指令对**移动旋转、BGM淡出淡出**等有效"]],
    ["ForceWait", ["\t#FW=2000"
        , "\t#ForceWait=2000"
        , "强制等待指令:等待时间"
        , "强制等待指令对**移动旋转、BGM淡出淡出**等有效"]],

    ["Jmp", ["\t#JMP=Label"
        , "脚本内跳转，跳转到指定的标签位"
        , "置跳转标志位为1，跳转标志位在解析到文本后重置为0"]],
    ["NJMP", ["\t#NJMP=Label"
        , "检测并重置跳转标志位"
        , "若非跳转至此(跳转标志位等于0)，则跳转到指定的标签位，用于跳转后的再初始化"]],
    ["Call", ["\t#Call=Label"
        , "使用`#Call=Label`指令调用位于`Label`处的代码段。该代码段必须位于`#EOF`之前，且必须以`#Ret`结尾"]],
    ["Ret", ["返回当前`Label`代码段的调用位点"]],
    ["FJMP", ["\t#FJMP=TargetFrame"
        , "\t#JmpFra=TargetFrame"
        , "跨场景跳转，跳转到场景`TargetFrame`，仅接受数字参数"]],
    ["JmpFra", ["\t#FJMP=TargetFrame"
        , "\t#JmpFra=TargetFrame"
        , "跨场景跳转，跳转到场景`TargetFrame`，仅接受数字参数"]],

    ["CJMP", ["\t#CJMP=Chapter"
        , "\t#JmpCha=Chapter"
        , "跨章节跳转，更新`CurrentChapter`，跳转到章节`Chapter`"]],
    ["JmpCha", ["\t#CJMP=Chapter"
        , "\t#JmpCha=Chapter"
        , "跨章节跳转，更新`CurrentChapter`，跳转到章节`Chapter`"]],
    ["SJMP", ["跳转到下一个跳转指令并重启扫描，内部指令，用于跳过文本功能"
        , "置跳转标志位为1，跳转标志位在解析到文本后重置为0"]],
    ["SkipJmp", ["跳转到下一个跳转指令并重启扫描，内部指令，用于跳过文本功能"
        , "置跳转标志位为1，跳转标志位在解析到文本后重置为0"]],
    ["SkipAnchor", ["该指令会被当作跳过终止指令处理。范例再初始化代码如下："
        , "\t#SkipAnchor"
        , "\t#NJMP=Init"
        , "\t#FNT"
        , "\t@CAD"
        , "\t@CG=BG_Indoor_HYBR_Cloudy_Noon.png"
        , "\t#TransitionSpeed=10"
        , "\t#FNTO"
        , "\t;Init"]],

    ["CreateSwitch", ["\t#CreateSwitch=SwitchNum"
        , "选项分支创建的入口指令，用于创建`SwitchNum`个分支"
        , "该指令会记录当前扫描指针位置，用于保存/读取"]],
    ["Switch", ["\t#Switch=X:Y:Text:Label"
        , "控制创建的分支选项，指定其X/Y坐标，选项文本与跳转标签"
        , "如果跳转标签定义为`Negative`，则该选项设定为灰色，无效"]],
    ["UnlockAch", ["\t#UnlockAch=Steam_AchName"
        , "解锁成就`Steam_AchName`"]],
    ["AddToStat", ["\t#AddToStat=Steam_StatName:Steam_StatAdd"
        , "更新统计`Steam_StatName`，增加`Steam_StatAdd`"
        , "若`Steam_StatAdd`留空，默认为统计量+1"]],
    ["UnlockAppreciation", ["\t#UnlockAppreciation=ContentName:Page:Pos"
        , "解锁位于`Page`页第`Pos`个指向`ContentName`的鉴赏，`Page`与`Pos`参数从零开始。留空`Page`与`Pos`参数时，若启用了映射且映射定义合法，则依照定义解锁；若未启用映射，则依照记录数值依此解锁"
        , "该指令需要内部参数`AppreciationType`，因此不能直接调用，而是由下列指令转译后执行："]],
    ["UnlockAppreciation_Chapter", ["\t#UnlockAppreciation_Chapter=ChapterName:Page:Pos"
        , "于场景回想中解锁位于`Page`页第`Pos`个指向`ChapterName`的鉴赏"
        , "含转译指令在内，解析到`#JMPFra`或`#JMPCha`指令后，会自动执行留空`Page`与`Pos`参数的指令"]],
    ["UnlockAppreciation_Graphic", ["\t#UnlockAppreciation_Graphic=GraphicName:Page:Pos"
        , "于场景回想中解锁位于`Page`页第`Pos`个指向`GraphicName`的鉴赏。`ChapterName`应为`Characters`的相对路径，CG文件夹下的文件的完整`ChapterName`为`..CG\Graphic.png`"
        , "该指令会自动忽略非CG文件夹下的文件"
        , "含转译指令在内，解析到`@Char`或`@CharChange`指令后，会自动执行留空`Page`与`Pos`参数的指令"]],
    ["UnlockAppreciation_Audio", ["\t#UnlockAppreciation_Audio=AudioName:Page:Pos"
        , "于场景回想中解锁位于`Page`页第`Pos`个指向`AudioName`的鉴赏"
        , "含转译指令在内，解析到`@BGM`或`@BGMPre`指令后，会自动执行留空`Page`与`Pos`参数的指令"]],
    ["VNMode_Newline", ["在文本间插入一个空行。建议在对白文本前后使用，以示区分"]],
    ["VNMode_ChangePage", ["切换页面"
        , "由于VN模式允许一个页面内显示多句文本，因此程序无法自动处理，需要手动指定翻页点。不进行翻页会导致文本显示出界"]],

    ["SetCapture", ["\t#SetCapture=ID"
        , "强制更新捕获ID为`ID`"
        , "在执行到下一个指定了ID的指令时，ID会被覆盖"]],
    ["CaptureSys", ["\t#CaptureSys=On"
        , "是否捕获系统对象的ID，默认关闭"]],


    // keywords_values
    ["SV", ["\t#SV=ValueID:Value"
        , "\t#SetValue=ValueID:Value"
        , "令`ValueID`=`Value`，若`Value`为数值(匹配`\+[0-9]+(.[0-9]+)?\|-[0-9]+(.[0-9]+)?\|[0-9]+(.[0-9]+)?`)，则为数值赋值，否则为字符串赋值"]],
    ["SetValue", ["\t#SV=ValueID:Value"
        , "\t#SetValue=ValueID:Value"
        , "令`ValueID`=`Value`，若`Value`为数值(匹配`\+[0-9]+(.[0-9]+)?\|-[0-9]+(.[0-9]+)?\|[0-9]+(.[0-9]+)?`)，则为数值赋值，否则为字符串赋值"]],
    ["SVV", ["\t#SVV=ValueIDA:ValueIDB"
        , "\t#SetValueValue=ValueIDA:ValueIDB"
        , "\t#SVAB=ValueIDA:ValueIDB"
        , "\t#SetValueAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SetValueValue", ["\t#SVV=ValueIDA:ValueIDB"
        , "\t#SetValueValue=ValueIDA:ValueIDB"
        , "\t#SVAB=ValueIDA:ValueIDB"
        , "\t#SetValueAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SVAB", ["\t#SVV=ValueIDA:ValueIDB"
        , "\t#SetValueValue=ValueIDA:ValueIDB"
        , "\t#SVAB=ValueIDA:ValueIDB"
        , "\t#SetValueAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SetValueAB", ["\t#SVV=ValueIDA:ValueIDB"
        , "\t#SetValueValue=ValueIDA:ValueIDB"
        , "\t#SVAB=ValueIDA:ValueIDB"
        , "\t#SetValueAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SSS", ["\t#SSS=ValueIDA:ValueIDB"
        , "\t#SetStringString=ValueIDA:ValueIDB"
        , "\t#SSAB=ValueIDA:ValueIDB"
        , "\t#SetStringAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SetStringString", ["\t#SSS=ValueIDA:ValueIDB"
        , "\t#SetStringString=ValueIDA:ValueIDB"
        , "\t#SSAB=ValueIDA:ValueIDB"
        , "\t#SetStringAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SSAB", ["\t#SSS=ValueIDA:ValueIDB"
        , "\t#SetStringString=ValueIDA:ValueIDB"
        , "\t#SSAB=ValueIDA:ValueIDB"
        , "\t#SetStringAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["SetStringAB", ["\t#SSS=ValueIDA:ValueIDB"
        , "\t#SetStringString=ValueIDA:ValueIDB"
        , "\t#SSAB=ValueIDA:ValueIDB"
        , "\t#SetStringAB=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDB`"]],
    ["VA", ["\t#VA=ValueID"
        , "\t#ValueAdd=ValueID:Value"
        , "`ValueID`=`ValueID`+`Value`"]],
    ["ValueAdd", ["\t#VA=ValueID"
        , "\t#ValueAdd=ValueID:Value"
        , "`ValueID`=`ValueID`+`Value`"]],
    ["VAV", ["\t#VAV=ValueIDA:ValueIDB"
        , "\t#ValueAddValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`+`ValueIDB`"]],
    ["ValueAddValue", ["\t#VAV=ValueIDA:ValueIDB"
        , "\t#ValueAddValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`+`ValueIDB`"]],
    ["VS", ["\t#VS=ValueID"
        , "\t#ValueSub=ValueID:Value"
        , "`ValueID`=`ValueID`-`Value`"]],
    ["ValueSub", ["\t#VS=ValueID"
        , "\t#ValueSub=ValueID:Value"
        , "`ValueID`=`ValueID`-`Value`"]],
    ["VSV", ["\t#VSV=ValueIDA:ValueIDB"
        , "\t#ValueSubValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`-`ValueIDB`"]],
    ["ValueSubValue", ["\t#VSV=ValueIDA:ValueIDB"
        , "\t#ValueSubValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`-`ValueIDB`"]],
    ["VM", ["\t#VM=ValueID"
        , "\t#ValueMul=ValueID:Value"
        , "`ValueID`=`ValueID`*`Value`"]],
    ["ValueMul", ["\t#VM=ValueID"
        , "\t#ValueMul=ValueID:Value"
        , "`ValueID`=`ValueID`*`Value`"]],
    ["VMV", ["\t#VMV=ValueIDA:ValueIDB"
        , "\t#ValueMulValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`*`ValueIDB`"]],
    ["ValueMulValue", ["\t#VMV=ValueIDA:ValueIDB"
        , "\t#ValueMulValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`*`ValueIDB`"]],
    ["VD", ["\t#VD=ValueID"
        , "\t#ValueDiv=ValueID:Value"
        , "`ValueID`=`ValueID`/`Value`"]],
    ["ValueDiv", ["\t#VD=ValueID"
        , "\t#ValueDiv=ValueID:Value"
        , "`ValueID`=`ValueID`/`Value`"]],
    ["VAV", ["\t#VAV=ValueIDA:ValueIDB"
        , "\t#ValueDivValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`/`ValueIDB`"]],
    ["ValueDivValue", ["\t#VAV=ValueIDA:ValueIDB"
        , "\t#ValueDivValue=ValueIDA:ValueIDB"
        , "`ValueIDA`=`ValueIDA`/`ValueIDB`"]],

    ["CMP", ["\t#CMP=ValueID:Value"
        , "\t#CMPV=ValueID:Value"
        , "\t#CMPValue=ValueID:Value"
        , "比较`ValueID`与`Value`的大小，若`Value`为数值(匹配`\+[0-9]+(.[0-9]+)?\|-[0-9]+(.[0-9]+)?\|[0-9]+(.[0-9]+)?`)，则与数值比较，否则与字符串比较"]],
    ["CMPV", ["\t#CMP=ValueID:Value"
        , "\t#CMPV=ValueID:Value"
        , "\t#CMPValue=ValueID:Value"
        , "比较`ValueID`与`Value`的大小，若`Value`为数值(匹配`\+[0-9]+(.[0-9]+)?\|-[0-9]+(.[0-9]+)?\|[0-9]+(.[0-9]+)?`)，则与数值比较，否则与字符串比较"]],
    ["CMPValue", ["\t#CMP=ValueID:Value"
        , "\t#CMPV=ValueID:Value"
        , "\t#CMPValue=ValueID:Value"
        , "比较`ValueID`与`Value`的大小，若`Value`为数值(匹配`\+[0-9]+(.[0-9]+)?\|-[0-9]+(.[0-9]+)?\|[0-9]+(.[0-9]+)?`)，则与数值比较，否则与字符串比较"]],
    ["CMPAB", ["\t#CMPAB=ValueIDA:ValueIDB"
        , "\t#CMPVAB=ValueIDA:ValueIDB"
        , "\t#CMPValueAB=ValueIDA:ValueIDB"
        , "\t#CMPVV=ValueIDA:ValueIDB"
        , "\t#CMPValueValue=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPVAB", ["\t#CMPAB=ValueIDA:ValueIDB"
        , "\t#CMPVAB=ValueIDA:ValueIDB"
        , "\t#CMPValueAB=ValueIDA:ValueIDB"
        , "\t#CMPVV=ValueIDA:ValueIDB"
        , "\t#CMPValueValue=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPValueAB", ["\t#CMPAB=ValueIDA:ValueIDB"
        , "\t#CMPVAB=ValueIDA:ValueIDB"
        , "\t#CMPValueAB=ValueIDA:ValueIDB"
        , "\t#CMPVV=ValueIDA:ValueIDB"
        , "\t#CMPValueValue=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPVV", ["\t#CMPAB=ValueIDA:ValueIDB"
        , "\t#CMPVAB=ValueIDA:ValueIDB"
        , "\t#CMPValueAB=ValueIDA:ValueIDB"
        , "\t#CMPVV=ValueIDA:ValueIDB"
        , "\t#CMPValueValue=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPValueValue", ["\t#CMPAB=ValueIDA:ValueIDB"
        , "\t#CMPVAB=ValueIDA:ValueIDB"
        , "\t#CMPValueAB=ValueIDA:ValueIDB"
        , "\t#CMPVV=ValueIDA:ValueIDB"
        , "\t#CMPValueValue=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPSAB", ["\t#CMPSAB=ValueIDA:ValueIDB"
        , "\t#CMPStringAB=ValueIDA:ValueIDB"
        , "\t#CMPSS=ValueIDA:ValueIDB"
        , "\t#CMPStringString=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPStringAB", ["\t#CMPSAB=ValueIDA:ValueIDB"
        , "\t#CMPStringAB=ValueIDA:ValueIDB"
        , "\t#CMPSS=ValueIDA:ValueIDB"
        , "\t#CMPStringString=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPSS", ["\t#CMPSAB=ValueIDA:ValueIDB"
        , "\t#CMPStringAB=ValueIDA:ValueIDB"
        , "\t#CMPSS=ValueIDA:ValueIDB"
        , "\t#CMPStringString=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],
    ["CMPStringString", ["\t#CMPSAB=ValueIDA:ValueIDB"
        , "\t#CMPStringAB=ValueIDA:ValueIDB"
        , "\t#CMPSS=ValueIDA:ValueIDB"
        , "\t#CMPStringString=ValueIDA:ValueIDB"
        , "比较`ValueIDA`与`ValueIDB`的大小"]],

    ["JE", ["比较结果等于时，跳转至`Label`"]],
    ["JA", ["比较结果大于时，跳转至`Label`"]],
    ["JB", ["比较结果小于时，跳转至`Label`"]],
    ["JNE", ["比较结果不等于时，跳转至`Label`"]],

    // keywords_dialogue
    ["DiaColor", ["\t#DiaColor=R:G:B"
        , "\t#DiaColor=#FFFFFF"
        , "定义对白文字的RGB值，`R:G:B/#FFFFFF`"
        , "字体颜色无法设置为`(255,255,255)/#FFFFFF`，否则会导致勾边错误"]],
    ["DiaSize", ["\t#DiaSize=size"
        , "定义对白文字的大小，AVG模式下默认大小为17，VN模式下默认大小为18"]],
    ["DiaFont", ["\t#DiaFont=font"
        , "定义对白文字的字体"]],

    ["DiaShaderOn", ["\t#DiaShaderOn=outlinepixel:R:G:B"
        , "\t#DiaShaderOn=outlinepixel:#FFFFFF"
        , "启用对白勾边，勾边颜色为`RGB/#FFFFFF`，勾边像素数为`outlinepixel`"]],
    ["DiaShaderOff", ["关闭对白勾边效果"]],

    ["DiaOutColor", ["\t#DiaOutColor=R:G:B"
        , "\t#DiaOutColor=#FFFFFF"
        , "启用勾边时，更改对白勾边颜色为`RGB/#FFFFFF`"]],
    ["DiaOutPixel", ["\t#DiaOutPixel=outlinepixel"
        , "启用勾边时，更改对白勾边像素数为`outlinepixel`"]],

    ["NameColor", ["\t#NameColor=R:G:B"
        , "\t#NameColor=#FFFFFF"
        , "定义姓名文字的RGB值，`R:G:B/#FFFFFF`"
        , "字体颜色无法设置为`(255,255,255)/#FFFFFF`，否则会导致勾边错误"]],
    ["NameSize", ["\t#NameSize=size"
        , "定义姓名文字的大小，默认大小为18"]],
    ["NameFont", ["\t#NameFont=font"
        , "定义姓名文字的字体"]],

    ["NameShaderOn", ["\t#NameShaderOn=outlinepixel:R:G:B"
        , "\t#NameShaderOn=outlinepixel:#FFFFFF"
        , "启用姓名勾边，勾边颜色为`RGB/#FFFFFF`，勾边像素数为`outlinepixel`"]],
    ["NameShaderOff", ["关闭姓名勾边效果"]],

    ["NameOutColor", ["\t#NameOutColor=R:G:B"
        , "\t#NameOutColor=#FFFFFF"
        , "启用勾边时，更改姓名勾边颜色为`RGB/#FFFFFF`"]],
    ["NameOutPixel", ["\t#NameOutPixel=outlinepixel"
        , "启用勾边时，更改对白勾边像素数为`outlinepixel`"]],

    ["Dia", ["\t@Dia=filename.png"
        , "\t@DiaChange=filename.png"
        , "切换对话框，解析到文本后进行，调用指令`@DiaTrans`"]],
    ["DiaChange", ["\t@Dia=filename.png"
        , "\t@DiaChange=filename.png"
        , "切换对话框，解析到文本后进行，调用指令`@DiaTrans`"]],
    ["DiaTrans", ["内部转译指令，判定并更新对话框"]],
    ["Name", ["\t@Name=filename.png"
        , "\t@NameChange=filename.png"
        , "切换姓名栏，解析到文本后进行，调用指令`@NameTrans`"]],
    ["NameChange", ["\t@Name=filename.png"
        , "\t@NameChange=filename.png"
        , "切换姓名栏，解析到文本后进行，调用指令`@NameTrans`"]],
    ["NameTrans", ["内部转译指令，判定并更新姓名栏"]],
    ["TextFadeOut", ["该指令会自动转译为"
        , "\t@Name=NameNull.png"
        , "\t@NameTrans"
        , "\t@Dia=DiaNull.png"
        , "\t@DiaTrans"]],


    // keywords_media

    ["P", ["\t@P=filename.mp3:volume:channel"
        , "\t@Play=filename.mp3:volume:channel"
        , "在指定的频道内以指定的音量播放一次`Audio`文件夹下指定的音频文件"
        , "其中`volume`可以直接接受`BGM`、`BGS`、`SE`、`DUB`作为参数来返回对应通道的音量"
        , "系统默认占用`1~5`号通道，用户可以安全使用的为`6~48`号通道"]],
    ["Play", ["\t@P=filename.mp3:volume:channel"
        , "\t@Play=filename.mp3:volume:channel"
        , "在指定的频道内以指定的音量播放一次`Audio`文件夹下指定的音频文件"
        , "其中`volume`可以直接接受`BGM`、`BGS`、`SE`、`DUB`作为参数来返回对应通道的音量"
        , "系统默认占用`1~5`号通道，用户可以安全使用的为`6~48`号通道"]],

    ["Stop", ["\t@Stop=channel"
        , "停止特定通道的音频播放"]],

    ["Se", ["\t@SE=filename.MP3"
        , "播放SE"]],

    ["Bgm", ["\t@Bgm=filename.MP3:fadeSpeed:startpoint:endpoint"
        , "\t@BgmLoop=filename.MP3:fadeSpeed:startpoint:endpoint"
        , "定义BGM的A-B循环，从起点开始循环播放到终点，淡入速度为淡入持续秒数，等待淡入淡出属于强制等待"
        , "循环起始点/循环终止点参数设定为零，引擎会进行整曲循环"]],
    ["BgmLoop", ["\t@Bgm=filename.MP3:fadeSpeed:startpoint:endpoint"
        , "\t@BgmLoop=filename.MP3:fadeSpeed:startpoint:endpoint"
        , "定义BGM的A-B循环，从起点开始循环播放到终点，淡入速度为淡入持续秒数，等待淡入淡出属于强制等待"
        , "循环起始点/循环终止点参数设定为零，引擎会进行整曲循环"]],

    ["BgmPre", ["\t@BgmPre=filename.MP3:fadeSpeed:startpoint:endpoint:preludepoint"
        , "\t@BgmPreludeLoop=filename.MP3:fadeSpeed:startpoint:endpoint:preludepoint"
        , "定义BGM有前奏的A-B循环，从前奏点开始播放，播放至循环终点后，在循环起点和循环终点间循环播放"
        , "循环起始点/循环终止点/前奏点参数设定为零，效果与上条指令一致"]],
    ["BgmPreludeLoop", ["\t@BgmPre=filename.MP3:fadeSpeed:startpoint:endpoint:preludepoint"
        , "\t@BgmPreludeLoop=filename.MP3:fadeSpeed:startpoint:endpoint:preludepoint"
        , "定义BGM有前奏的A-B循环，从前奏点开始播放，播放至循环终点后，在循环起点和循环终点间循环播放"
        , "循环起始点/循环终止点/前奏点参数设定为零，效果与上条指令一致"]],

    ["BgmPause", ["暂停BGM"]],
    ["BgmResume", ["恢复BGM"]],

    ["BgmFadeOut", ["\t@BgmFadeOut=fadeSpeed"
        , "淡出BGM"]],

    ["Bgs", ["\t@Bgs=filename.MP3:fadeSpeed"
        , "\t@BgsLoop=filename.MP3:fadeSpeed"
        , "定义BGS，BGS默认循环播放，请确认BGS素材可无缝循环"]],
    ["BgsLoop", ["\t@Bgs=filename.MP3:fadeSpeed"
        , "\t@BgsLoop=filename.MP3:fadeSpeed"
        , "定义BGS，BGS默认循环播放，请确认BGS素材可无缝循环"]],

    ["BgsPause", ["暂停BGS"]],
    ["BgsResume", ["恢复BGS"]],

    ["BgsFadeOut", ["\t@BgsFadeOut=fadeSpeed"
        , "淡出BGS"]],

    ["Dub", ["\t@Dub=filename.mp3"
        , "\t@DubPlay=filename.mp3"
        , "更新语音内容，该语音会在显示下一句文本时播放，使用该指令会自动禁用语音序列"
        , "该指令所播放的音频文件类型由用户指定"]],
    ["DubPlay", ["\t@Dub=filename.mp3"
        , "\t@DubPlay=filename.mp3"
        , "更新语音内容，该语音会在显示下一句文本时播放，使用该指令会自动禁用语音序列"
        , "该指令所播放的音频文件类型由用户指定"]],

    ["DubSeque", ["启用/禁用语音序列，默认启用"
        , "变更`NowTalking`后会自动启用语音序列"
        , "使用`DubPlay`指令后会自动禁用语音序列"]],
    ["Ntk", ["\t@NTK=NowTalking"
        , "\t@NTKChange=NowTalking"
        , "变更`NowTalking`的值，并且在下一句语音开始播放对应的语音文件`NowTalking.OGG`"
        , "`NowTalking`默认从0开始"
        , "变更后会自动启用语音序列"]],
    ["NtkChange", ["\t@NTK=NowTalking"
        , "\t@NTKChange=NowTalking"
        , "变更`NowTalking`的值，并且在下一句语音开始播放对应的语音文件`NowTalking.OGG`"
        , "`NowTalking`默认从0开始"
        , "变更后会自动启用语音序列"]],

    ["PV", ["\t@PV=FileName.AVI:StartPos"
        , "\t@PlayVideo=FileName.AVI:StartPos"
        , "最基本的也是最简单的指令，从`StartPos`开始播放`FileName.AVI`，单位毫秒<等价于以下指令组合"
        , "\t@OpenVideo=FileName.AVI"
        , "\t@SetVideoPos=StartPos"
        , "\t@VideoResume"]],
    ["PlayVideo", ["\t@PV=FileName.AVI:StartPos"
        , "\t@PlayVideo=FileName.AVI:StartPos"
        , "最基本的也是最简单的指令，从`StartPos`开始播放`FileName.AVI`，单位毫秒<等价于以下指令组合"
        , "\t@OpenVideo=FileName.AVI"
        , "\t@SetVideoPos=StartPos"
        , "\t@VideoResume"]],
    ["OV", ["\t@OV=FileName.AVI"
        , "\t@OpenVideo=FileName.AVI"
        , "打开视频但并不播放，需要播放时请使用`@VideoResume`"]],
    ["OpenVideo", ["\t@OV=FileName.AVI"
        , "\t@OpenVideo=FileName.AVI"
        , "打开视频但并不播放，需要播放时请使用`@VideoResume`"]],
    ["CV", ["关闭视频"]],
    ["CloseVideo", ["关闭视频"]],
    ["VR", ["继续播放视频"]],
    ["VideoResume", ["继续播放视频"]],
    ["VP", ["暂停视频"]],
    ["VideoPause", ["暂停视频"]],
    ["VW", ["当前视频播放结束后才会进入下一阶段"]],
    ["VideoWait", ["当前视频播放结束后才会进入下一阶段"]],
    ["VL", ["设定当前视频循环播放"]],
    ["VideoLoop", ["设定当前视频循环播放"]],
    ["SVP", ["\t@SVP=StartPos"
        , "\t@SetVideoPos=StartPos"
        , "设置视频位置"]],
    ["SetVideoPos", ["\t@SVP=StartPos"
        , "\t@SetVideoPos=StartPos"
        , "设置视频位置"]],


    // keywords_effect

    ["CreateBlur", ["创建带有背景模糊的景深对象，对象保存至景深堆栈，默认ID从`-100`开始递减"
        , "该指令创建的景深对象位于演出对象最下方"]],
    ["AddBlur", ["\t@AddBlur=Num"
        , "`@AddBlur`会转译为`Num`个`@CreateBlur`指令，创建结束的景深对象默认位于演出对象最下方。`Num`数值越大，模糊效果越强，留空默认为1"
        , "可使用`@Order`指令控制景深对象次序，使用`@CharAllDisopse`指令不会销毁景深对象。请勿使用`@CharDispose`指令销毁，该方法会破坏景深堆栈指针"]],
    ["RemoveBlur", ["\t@RemoveBlur=Num"
        , "`@RemoveBlur`会转译为`Num`个`@DestroyBlur`指令，欲销毁全部景深对象，请将`Num`设定为一个较大的数，如`255`，实际指令转译最大只会进行当前景深对象数(即景深堆栈深度)次"]],
    ["DestroyBlur", ["移除景深堆栈最上方的景深对象"]],
    ["BackZoomParam", ["\t@BackZoomParam=Easing_FuncA:Easing_FuncB"
        , "指定进行缩放时的Easing参数"]],
    ["BackZoomReset", ["按当前参数重置缩放，转译为指令`@BackZoom=0:0:ResolutionX:ResolutionY:10:0:0`在真实坐标模式下执行"]],
    ["BackZoom", ["\t@BackZoom=X:Y:width:height:Speed:Instant:Forcewait"
        , "缩放到大小为`(width,height)`，区域中心坐标`(x,y)`指定缩放速度以及是否立即缩放"
        , "`Forcewait`参数为`0/1`，`0`表示默认在阶段二进行变化，`1`表示跨阶段变化"]],
    ["Shake", ["\t@Shake=5000"
        , "震动一定时长后停止震动，单位为帧，通常情况下设定为60代表震动一秒"]],
    ["ShakeDir", ["\t@ShakeDir=Dir"
        , "设置震动方向，`X=0`，`Y=1`"]],
    ["KeepShake", ["持续震动"]],
    ["KeepShakeOff", ["停止震动"]],
    ["Fade", ["创建淡入淡出叠化效果，会被转译为`@PatternFade`"
        , "默认情况下淡入速度较快，建议使用`#TransitionSpeed`指令修改叠化速度为5左右"]],
    ["DestroyFade", ["消除之前创建的所有叠化效果，会被转译为`@PatternFadeOut`"]],

    ["PF", ["\t@PF=picname:Orderable"
        , "\t@PatternFade=picname:Orderable"
        , "创建`Pattern`过渡元件，使用`pattern fade`读取`picname`图像叠化进入"]],
    ["PatternFade", ["\t@PF=picname:Orderable"
        , "\t@PatternFade=picname:Orderable"
        , "创建`Pattern`过渡元件，使用`pattern fade`读取`picname`图像叠化进入"]],
    ["PFO", ["\t@PFO=picname"
        , "\t@PatternFadeOut=picname:Orderable"
        , "使用`PatternFade`读取`picname`图像叠化退出使用`PatternFade`创建的对象，具有`Orderable`属性的对象可参与排序"
        , "该指令运行结束后会自动销毁该Pattern过渡元件"]],
    ["PatternFadeOut", ["\t@PFO=picname"
        , "\t@PatternFadeOut=picname:Orderable"
        , "使用`PatternFade`读取`picname`图像叠化退出使用`PatternFade`创建的对象，具有`Orderable`属性的对象可参与排序"
        , "该指令运行结束后会自动销毁该Pattern过渡元件"]],

    ["Rain", ["立即创建下雨效果，允许连续使用"]],
    ["Snow", ["立即创建下雪效果，允许连续使用"]],
    ["Normal", ["立即取消天气效果，允许连续使用"]],
    ["ToRain", ["逐渐创建下雨效果，不会在过渡状态2等待，不受到强制等待指令控制"]],
    ["ToSnow", ["逐渐创建下雪效果，不会在过渡状态2等待，不受到强制等待指令控制"]],
    ["ToNormal", ["逐渐取消天气效果，不会在过渡状态2等待，不受到强制等待指令控制"]],

    ["CrossFade", ["\t@CrossFade=ID"
        , "为该对象下次叠化启用交错模式"
        , "ID留空，程序会尝试捕获最新调用叠化指令的对象，在叠化完成后，CrossFade会自动禁用"
        , "在叠化阶段开始指令前(等待/强制等待/文本)使用指令均有效，但从可读性角度建议写于相应叠化指令后"]],
    ["KeepRes", ["\t@KeepRes=ID"
        , "\t@KeepResolution=ID"
        , "该ID对应的对象会在叠化时保持当前设定的分辨率"]],
    ["KeepResolution", ["\t@KeepRes=ID"
        , "\t@KeepResolution=ID"
        , "该ID对应的对象会在叠化时保持当前设定的分辨率"]],

    ["KeepResOff", ["\t@KeepResOff=ID"
        , "\t@KeepResolutionOff=ID"
        , "该ID对应的对象会在叠化时重设分辨率为新图像的分辨率"]],
    ["KeepResolutionOff", ["\t@KeepResOff=ID"
        , "\t@KeepResolutionOff=ID"
        , "该ID对应的对象会在叠化时重设分辨率为新图像的分辨率"]],

    ["Sepia", ["\t@Sepia=Strength:NoiseMotion:Period"
        , "\t@SepiaToning=Strength:NoiseMotion:Period"
        , "创建强度为`Strength`的`Sepia Toning`对象，对象默认ID为`-5`。其中`Strength`应为一个`[0,1]`的浮点数，默认值为`0.5`，`NoiseMotion`参数控制噪声运动的开启与关闭，当设定为`1`或`On`的时候会启用噪声运动，运动周期为`Period`，单位毫秒，默认值为`-1`，即每帧更新。已经创建了`Sepia Toning`对象后调用该指令，该指令无效"]],
    ["SepiaToning", ["\t@Sepia=Strength:NoiseMotion:Period"
        , "\t@SepiaToning=Strength:NoiseMotion:Period"
        , "创建强度为`Strength`的`Sepia Toning`对象，对象默认ID为`-5`。其中`Strength`应为一个`[0,1]`的浮点数，默认值为`0.5`，`NoiseMotion`参数控制噪声运动的开启与关闭，当设定为`1`或`On`的时候会启用噪声运动，运动周期为`Period`，单位毫秒，默认值为`-1`，即每帧更新。已经创建了`Sepia Toning`对象后调用该指令，该指令无效"]],
    ["ChangeSepiaStrength", ["\t@ChangeSepiaStrength=Strength"
        , "在演出执行阶段改变`Sepia Toning`对象的`Strength`，参数留空会将`Strength`设定为默认值`0.5`"]],
    ["SetSepiaNoiseMotion", ["\t@SetSepiaNoiseMotion=On/Off"
        , "控制噪声运动的开启与关闭，设定为`1`或`On`时启用噪声运动，设定为`0`或`Off`时禁用噪声运动，参数为空会Toggle当前启用状态"]],
    ["ChangeSepiaNoiseMotionPeriod", ["\t@ChangeSepiaNoiseMotionPeriod=Period"
        , "将噪声运动的运动周期设定为`Period`，单位毫秒，参数为空会将`Period`设定为默认值`-1`，一个典型的参考值为`300`毫秒"]],


    // keywords_preobj

    ["StrCenter", ["定义坐标参数留空时字符串的默认位置，该指令后创建的字符串默认居中"]],
    ["StrBottom", ["定义坐标参数留空时字符串的默认位置，该指令后创建的字符串默认底部居中"]],
    ["Str", ["\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "创建字符串，字符串ID与图像ID相互独立"
        , "除输入完整参数外，字符串参数还允许通过单独指令修改。在字符串创建的解析循环中进行的修改会作用于创建叠化，其余场合使用指令修改参数是否进行叠化请参考具体指令说明"
        , "默认参数：字符串对象宽600，字符串对象高60；默认不透明度`0`；默认底部居中；默认字号`22`；默认字体`黑体`；默认颜色：黑色文字`RGB=(0,0,0)`，白色勾边`RGB=(255,255,255)`"]],
    ["String", ["\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "创建字符串，字符串ID与图像ID相互独立"
        , "除输入完整参数外，字符串参数还允许通过单独指令修改。在字符串创建的解析循环中进行的修改会作用于创建叠化，其余场合使用指令修改参数是否进行叠化请参考具体指令说明"
        , "默认参数：字符串对象宽600，字符串对象高60；默认不透明度`0`；默认底部居中；默认字号`22`；默认字体`黑体`；默认颜色：黑色文字`RGB=(0,0,0)`，白色勾边`RGB=(255,255,255)`"]],
    ["CreateStr", ["\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "创建字符串，字符串ID与图像ID相互独立"
        , "除输入完整参数外，字符串参数还允许通过单独指令修改。在字符串创建的解析循环中进行的修改会作用于创建叠化，其余场合使用指令修改参数是否进行叠化请参考具体指令说明"
        , "默认参数：字符串对象宽600，字符串对象高60；默认不透明度`0`；默认底部居中；默认字号`22`；默认字体`黑体`；默认颜色：黑色文字`RGB=(0,0,0)`，白色勾边`RGB=(255,255,255)`"]],
    ["CreateString", ["\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@Str=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@String=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateStr=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:R:G:B"
        , "\t@CreateString=string:ID:TypeEffect:Alpha:x:y:size:font:#FFFFFF"
        , "创建字符串，字符串ID与图像ID相互独立"
        , "除输入完整参数外，字符串参数还允许通过单独指令修改。在字符串创建的解析循环中进行的修改会作用于创建叠化，其余场合使用指令修改参数是否进行叠化请参考具体指令说明"
        , "默认参数：字符串对象宽600，字符串对象高60；默认不透明度`0`；默认底部居中；默认字号`22`；默认字体`黑体`；默认颜色：黑色文字`RGB=(0,0,0)`，白色勾边`RGB=(255,255,255)`"]],

    ["StrS", ["\t@StrS=ID:Size"
        , "\t@StrSize=ID:Size"
        , "无叠化，更改字符串字号"]],
    ["StrSize", ["\t@StrS=ID:Size"
        , "\t@StrSize=ID:Size"
        , "无叠化，更改字符串字号"]],
    ["StrF", ["\t@StrF=ID:Font"
        , "\t@StrFont=ID:Font"
        , "无叠化，更改字符串字体"]],
    ["StrFont", ["\t@StrF=ID:Font"
        , "\t@StrFont=ID:Font"
        , "无叠化，更改字符串字体"]],
    ["StrA", ["\t@StrA=ID:120"
        , "\t@StrAlpha=ID:120"
        , "切换对象到指定的不透明度"]],
    ["StrAlpha", ["\t@StrA=ID:120"
        , "\t@StrAlpha=ID:120"
        , "切换对象到指定的不透明度"]],

    ["StrC", ["\t@StrC=ID:R:G:B"
        , "\t@StrC=ID:#FFFFFF"
        , "\t@StrColor=ID:R:G:B"
        , "\t@StrColor=ID:#FFFFFF"
        , "无叠化，更改字符串颜色"]],
    ["StrColor", ["\t@StrC=ID:R:G:B"
        , "\t@StrC=ID:#FFFFFF"
        , "\t@StrColor=ID:R:G:B"
        , "\t@StrColor=ID:#FFFFFF"
        , "无叠化，更改字符串颜色"]],
    ["MS", ["\t@MS=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveStr=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "移动字符串对象，具体参数说明请参见`@MoveObj`一节，坐标受`@StrCenter`参数影响"]],
    ["MoveStr", ["\t@MS=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveStr=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "移动字符串对象，具体参数说明请参见`@MoveObj`一节，坐标受`@StrCenter`参数影响"]],
    ["DestroyStr", ["\t@DestroyStr=ID"
        , "\t@DestroyString=ID"
        , "销毁字符串"]],
    ["DestroyString", ["\t@DestroyStr=ID"
        , "\t@DestroyString=ID"
        , "销毁字符串"]],

    ["DestroyAllStr", ["销毁全部字符串对象"]],
    ["DestroyAllString", ["销毁全部字符串对象"]],



    ["Spe", ["该指令在调用前会在引擎内部更新`CoefStr`、`FolderStr`参数，定义转译后指令的文件路径、参数。**该指令为内部指令，请避免在脚本中使用。**"
        , "以使用内部指令`@Spe=dialog2.png`创建对话框为例"
        , "指令会被转译为`@Char=FolderStr+dialog2.png+CoefStr`，执行后更新相应参数"]],

    ["MO", ["\t@MO=FixedValue:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveObj=FixedValue:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "内部指令，`@MoveChar`与@`MoveStr`会被引擎转译为该指令执行"]],
    ["MoveObj", ["\t@MO=FixedValue:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveObj=FixedValue:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "内部指令，`@MoveChar`与@`MoveStr`会被引擎转译为该指令执行"]],

    ["CG", ["\t@CG=filename.png"
        , "\t@CGChange=filename.png"
        , "切换CG，叠化阶段进行"]],
    ["CGChange", ["\t@CG=filename.png"
        , "\t@CGChange=filename.png"
        , "切换CG，叠化阶段进行"]],

    ["CPF", ["\t@CPF=picname:patternname:ID"
        , "\t@CPatternFade=picname:patternname:ID"
        , "读取贴图，前景背景同时叠化"]],
    ["CPatternFade", ["\t@CPF=picname:patternname:ID"
        , "\t@CPatternFade=picname:patternname:ID"
        , "读取贴图，前景背景同时叠化"]],
    ["CPFI", ["\t@CPFI=picname:patternname:ID"
        , "\t@CPatternFadeIn=picname:patternname:ID"
        , "读取贴图，叠化至前景图像"]],
    ["CPatternFadeIn", ["\t@CPFI=picname:patternname:ID"
        , "\t@CPatternFadeIn=picname:patternname:ID"
        , "读取贴图，叠化至前景图像"]],
    ["CPFO", ["\t@CPFO=picname:patternname:ID"
        , "\t@CPatternFadeOut=picname:patternname:ID"
        , "读取贴图，叠化至背景图像"]],
    ["CPatternFadeOut", ["\t@CPFO=picname:patternname:ID"
        , "\t@CPatternFadeOut=picname:patternname:ID"
        , "读取贴图，叠化至背景图像"]],
    ["CGPFI", ["\t@CGPFI=picname:patternname"
        , "\t@CGPatternFadeIn=picname:patternname"
        , "转译指令，读取贴图，CG叠化至前景图像"]],
    ["CGPatternFadeIn", ["\t@CGPFI=picname:patternname"
        , "\t@CGPatternFadeIn=picname:patternname"
        , "转译指令，读取贴图，CG叠化至前景图像"]],

    ["CGPFO", ["\t@CGPFO=picname:patternname"
        , "\t@CGPatternFadeOut=picname:patternname"
        , "转译指令，读取贴图，CG叠化至背景图像"]],
    ["CGPatternFadeOut", ["\t@CGPFO=picname:patternname"
        , "\t@CGPatternFadeOut=picname:patternname"
        , "转译指令，读取贴图，CG叠化至背景图像"]],

    ["CharPF", ["\t@CharPF=picname:patternname:ID"
        , "\t@CharPatternFade=picname:patternname:ID"
        , "转译指令，读取贴图，叠化至前景图像。**不建议进行差分和不同对象的切换，而是将当前图像切换至透明图像来实现进场和退场效果**"]],
    ["CharPatternFade", ["\t@CharPF=picname:patternname:ID"
        , "\t@CharPatternFade=picname:patternname:ID"
        , "转译指令，读取贴图，叠化至前景图像。**不建议进行差分和不同对象的切换，而是将当前图像切换至透明图像来实现进场和退场效果**"]],

    ["Char", ["\t@Char=filename.png:ID:Alpha:X:Y:Width:Height"
        , "\t@Character=filename.png:ID:Alpha:X:Y:Width:Height"
        , "该指令用于创建图像：留空文件后缀名时，会默认图片格式为PNG；不透明度范围为0~255；文件名支持使用../返回上级路径；坐标系以画面中央底部为原点；坐标以图像中央底部为热点；长宽默认为图片原始尺寸，使用+/-指定增量时，会以原始尺寸为基础进行计算"]],
    ["Character", ["\t@Char=filename.png:ID:Alpha:X:Y:Width:Height"
        , "\t@Character=filename.png:ID:Alpha:X:Y:Width:Height"
        , "该指令用于创建图像：留空文件后缀名时，会默认图片格式为PNG；不透明度范围为0~255；文件名支持使用../返回上级路径；坐标系以画面中央底部为原点；坐标以图像中央底部为热点；长宽默认为图片原始尺寸，使用+/-指定增量时，会以原始尺寸为基础进行计算"]],

    ["CC", ["\t@CC=filename:ID:alpha:width:height"
        , "\t@CharChange=filename:ID:alpha:width:height"
        , "该指令用于切换为其他角色或动作：留空文件后缀名时，会默认图片格式为PNG；不透明度范围为0~255，该指令会重置`@CharAlpha`设定的不透明度；文件名支持使用../返回上级路径"
        , "交错模式：通常来说，切换角色时应启用交错模式，更改长宽比时，会自动切换为交错模式"
        , "长宽：默认为新图片原始尺寸，使用+/-指定增量时，会以原始尺寸为基础进行计算"]],
    ["CharChange", ["\t@CC=filename:ID:alpha:width:height"
        , "\t@CharChange=filename:ID:alpha:width:height"
        , "该指令用于切换为其他角色或动作：留空文件后缀名时，会默认图片格式为PNG；不透明度范围为0~255，该指令会重置`@CharAlpha`设定的不透明度；文件名支持使用../返回上级路径"
        , "交错模式：通常来说，切换角色时应启用交错模式，更改长宽比时，会自动切换为交错模式"
        , "长宽：默认为新图片原始尺寸，使用+/-指定增量时，会以原始尺寸为基础进行计算"]],

    ["CA", ["\t@CA=ID:Alpha"
        , "\t@CharAlpha=ID:Alpha"
        , "切换对象到指定的不透明度"]],
    ["CharAlpha", ["\t@CA=ID:Alpha"
        , "\t@CharAlpha=ID:Alpha"
        , "切换对象到指定的不透明度"]],

    ["CharRotate", ["\t@CharRotate=ID:angle:clockwise:circlecount"
        , "旋转对象至目标角度与预定圈数，`clockwise = 1`为顺时针，`clockwise = -1`为逆时针"
        , "若目标角度设定为360度，旋转0圈，将持续旋转"
        , "该指令不可与立绘叠化同时使用"]],
    ["SetAutoArrange", ["\t@SetAutoArrange=On/Off"
        , "控制自动间距功能的开启与关闭，设定为1或On时启用自动间距，设定为0或Off时禁用自动间距，参数为空会Toggle当前启用状态"
        , "启用自动间距后，新建/销毁立绘时会自动调整间距，最大支持处理六张立绘的间距"]],
    ["CD", ["\t@CD=ID"
        , "\t@CharDispose=ID"
        , "销毁并释放该ID对应的图像对象的本体和遮罩，会转译为`@CharAlpha:ID:255`并启用`Destroy`Flag"]],
    ["CharDispose", ["\t@CD=ID"
        , "\t@CharDispose=ID"
        , "销毁并释放该ID对应的图像对象的本体和遮罩，会转译为`@CharAlpha:ID:255`并启用`Destroy`Flag"]],

    ["CAD", ["销毁全部的图像对象，并释放其对应的本体和遮罩"
        , "CG/UI不会被销毁"]],
    ["CharAllDispose", ["销毁全部的图像对象，并释放其对应的本体和遮罩"
        , "CG/UI不会被销毁"]],
    ["MC", ["\t@MC=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveChar=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "移动图片对象，具体参数说明请参见`@MoveObj`一节"]],
    ["MoveChar", ["\t@MC=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "\t@MoveChar=ID:TarX:TarY:Time:FuncA:FuncB:Mode"
        , "移动图片对象，具体参数说明请参见`@MoveObj`一节"]],

    ["HideUI", ["无叠化，隐藏菜单与快捷栏，会自动转译`#DisableUI`"]],
    ["ShowUI", ["无叠化，重新显示菜单与快捷栏，会自动转译`#EnableUI`"]],

    ["Order", ["\t@Order=ID:Order:Type"
        , "无叠化，调整ID指定对象的层级，通过`Type`指定不同的对象类型"
        , "`Type`为`Pic`则移动`ID`对应的图像对象，`Type`为`Str`则移动`ID`对应的字符串对象"]],
    ["Front", ["\t@Front=ID:Type"
        , "无叠化，将`ID`指定的`Type`对象移至顶层"]],
    ["Back", ["\t@Back=ID:Type"
        , "无叠化，将`ID`指定的`Type`对象移至底层"]],
    ["Forward", ["\t@Forward=ID:Type:Num"
        , "无叠化，将`ID`指定的`Type`对象上移`Num`层，参数留空默认上移一层"]],
    ["Backward", ["\t@Backward=ID:Type:Num"
        , "无叠化，将`ID`指定的`Type`对象下移`Num`层，参数留空默认下移一层"]],
]);

export enum ParamType {
    String,
    Number,
    Boolean,
    Volume,
    ObjType,
    Color,
    File,
    Any,
};

export interface ParamFormat {
    minParam: number;
    maxParam: number;
    type: ParamType[];
}
export const commandParamList = new Map<string, ParamFormat>([
    // keywords_region

    ["Begin", { minParam: 0, maxParam: 0, type: [] }],
    ["End", { minParam: 0, maxParam: 0, type: [] }],

    // keywords_system
    ["Error", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["NULL", { minParam: 0, maxParam: 0, type: [] }],
    ["CacheClean", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["UnSkipAble", { minParam: 0, maxParam: 0, type: [] }],
    ["SkipAble", { minParam: 0, maxParam: 0, type: [] }],
    ["SGO", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetGlobalOffset", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["TransitionSpeed", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["ForceTransition", { minParam: 0, maxParam: 0, type: [] }],
    ["Save", { minParam: 0, maxParam: 0, type: [] }],
    ["Debug", { minParam: 0, maxParam: 0, type: [] }],
    ["DebugOff", { minParam: 0, maxParam: 0, type: [] }],
    ["DefineRGB", { minParam: 1, maxParam: 3, type: [ParamType.Color, ParamType.Number, ParamType.Number] }],

    ["MSG", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["MSGClear", { minParam: 0, maxParam: 0, type: [] }],
    ["StopFF", { minParam: 0, maxParam: 0, type: [] }],
    ["StopFastForward", { minParam: 0, maxParam: 0, type: [] }],
    ["DisableUI", { minParam: 0, maxParam: 0, type: [] }],
    ["EnableUI", { minParam: 0, maxParam: 0, type: [] }],
    ["FNT", { minParam: 0, maxParam: 0, type: [] }],
    ["ForceNoTransition", { minParam: 0, maxParam: 0, type: [] }],

    ["FNTO", { minParam: 0, maxParam: 0, type: [] }],
    ["ForceNoTransitionOff", { minParam: 0, maxParam: 0, type: [] }],

    ["EOF", { minParam: 0, maxParam: 0, type: [] }],
    ["W", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["Wait", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["FW", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["ForceWait", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Jmp", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["NJMP", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["Call", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["Ret", { minParam: 0, maxParam: 0, type: [] }],
    ["FJMP", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["JmpFra", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["CJMP", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["JmpCha", { minParam: 1, maxParam: 1, type: [ParamType.String] }],

    ["SJMP", { minParam: 0, maxParam: 0, type: [] }],
    ["SkipJmp", { minParam: 0, maxParam: 0, type: [] }],
    ["SkipAnchor", { minParam: 0, maxParam: 0, type: [] }],

    ["CreateSwitch", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["Switch", { minParam: 4, maxParam: 4, type: [ParamType.Number, ParamType.Number, ParamType.String, ParamType.String] }],
    ["UnlockAch", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["AddToStat", { minParam: 1, maxParam: 2, type: [ParamType.String, ParamType.Number] }],
    ["UnlockAppreciation", { minParam: 1, maxParam: 3, type: [ParamType.String, ParamType.Number, ParamType.Number] }],
    ["UnlockAppreciation_Chapter", { minParam: 1, maxParam: 3, type: [ParamType.String, ParamType.Number, ParamType.Number] }],
    ["UnlockAppreciation_Graphic", { minParam: 1, maxParam: 3, type: [ParamType.String, ParamType.Number, ParamType.Number] }],
    ["UnlockAppreciation_Audio", { minParam: 1, maxParam: 3, type: [ParamType.String, ParamType.Number, ParamType.Number] }],
    ["VNMode_Newline", { minParam: 0, maxParam: 0, type: [] }],
    ["VNMode_ChangePage", { minParam: 0, maxParam: 0, type: [] }],


    ["SetCapture", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["CaptureSys", { minParam: 1, maxParam: 1, type: [ParamType.Boolean] }],

    // keywords_values
    ["SV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SVV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetValueValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SVAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetValueAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SSS", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetStringString", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SSAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["SetStringAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VA", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueAdd", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VAV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueAddValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VS", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueSub", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VSV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueSubValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VM", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueMul", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VMV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueMulValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VD", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueDiv", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["VAV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["ValueDivValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],

    ["CMP", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPVAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPValueAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPVV", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPValueValue", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPSAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPStringAB", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPSS", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["CMPStringString", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],

    ["JE", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["JA", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["JB", { minParam: 1, maxParam: 1, type: [ParamType.String] }],
    ["JNE", { minParam: 1, maxParam: 1, type: [ParamType.String] }],

    // keywords_dialogue

    ["DiaColor", { minParam: 1, maxParam: 3, type: [ParamType.Color] }],
    ["DiaSize", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["DiaFont", { minParam: 1, maxParam: 1, type: [ParamType.String] }],

    ["DiaShaderOn", { minParam: 2, maxParam: 4, type: [ParamType.Number, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["DiaShaderOff", { minParam: 0, maxParam: 0, type: [] }],

    ["DiaOutColor", { minParam: 1, maxParam: 3, type: [ParamType.Color] }],
    ["DiaOutPixel", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["NameColor", { minParam: 1, maxParam: 3, type: [ParamType.Color] }],
    ["NameSize", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["NameFont", { minParam: 1, maxParam: 1, type: [ParamType.String] }],

    ["NameShaderOn", { minParam: 2, maxParam: 4, type: [ParamType.Number, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["NameShaderOff", { minParam: 0, maxParam: 0, type: [] }],

    ["NameOutColor", { minParam: 1, maxParam: 3, type: [ParamType.Color] }],
    ["NameOutPixel", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Dia", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["DiaChange", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["DiaTrans", { minParam: 0, maxParam: 0, type: [] }],
    ["Name", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["NameChange", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["NameTrans", { minParam: 0, maxParam: 0, type: [] }],
    ["TextFadeOut", { minParam: 0, maxParam: 0, type: [] }],

    // keywords_media

    ["P", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.String, ParamType.Number] }],
    ["Play", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.String, ParamType.Number] }],

    ["Stop", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Se", { minParam: 1, maxParam: 1, type: [ParamType.File] }],

    ["Bgm", { minParam: 1, maxParam: 4, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["BgmLoop", { minParam: 1, maxParam: 4, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["BgmPre", { minParam: 1, maxParam: 5, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["BgmPreludeLoop", { minParam: 1, maxParam: 5, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["BgmPause", { minParam: 0, maxParam: 0, type: [] }],
    ["BgmResume", { minParam: 0, maxParam: 0, type: [] }],

    ["BgmFadeOut", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Bgs", { minParam: 1, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["BgsLoop", { minParam: 1, maxParam: 2, type: [ParamType.File, ParamType.Number] }],

    ["BgsPause", { minParam: 0, maxParam: 0, type: [] }],
    ["BgsResume", { minParam: 0, maxParam: 0, type: [] }],

    ["BgsFadeOut", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Dub", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["DubPlay", { minParam: 1, maxParam: 1, type: [ParamType.File] }],

    ["DubSeque", { minParam: 0, maxParam: 0, type: [] }],
    ["Ntk", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["NtkChange", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["PV", { minParam: 1, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["PlayVideo", { minParam: 1, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["OV", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["OpenVideo", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["CV", { minParam: 0, maxParam: 0, type: [] }],
    ["CloseVideo", { minParam: 0, maxParam: 0, type: [] }],
    ["VR", { minParam: 0, maxParam: 0, type: [] }],
    ["VideoResume", { minParam: 0, maxParam: 0, type: [] }],
    ["VP", { minParam: 0, maxParam: 0, type: [] }],
    ["VideoPause", { minParam: 0, maxParam: 0, type: [] }],
    ["VW", { minParam: 0, maxParam: 0, type: [] }],
    ["VideoWait", { minParam: 0, maxParam: 0, type: [] }],
    ["VL", { minParam: 0, maxParam: 0, type: [] }],
    ["VideoLoop", { minParam: 0, maxParam: 0, type: [] }],
    ["SVP", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["SetVideoPos", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    // keywords_effect

    ["CreateBlur", { minParam: 0, maxParam: 0, type: [] }],
    ["AddBlur", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["RemoveBlur", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["DestroyBlur", { minParam: 0, maxParam: 0, type: [] }],
    ["BackZoomParam", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["BackZoomReset", { minParam: 0, maxParam: 0, type: [] }],
    ["BackZoom", { minParam: 5, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["Shake", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["ShakeDir", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["KeepShake", { minParam: 0, maxParam: 0, type: [] }],
    ["KeepShakeOff", { minParam: 0, maxParam: 0, type: [] }],
    ["Fade", { minParam: 0, maxParam: 0, type: [] }],
    ["DestroyFade", { minParam: 0, maxParam: 0, type: [] }],

    ["PF", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["PatternFade", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["PFO", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.Number] }],
    ["PatternFadeOut", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.Number] }],

    ["Rain", { minParam: 0, maxParam: 0, type: [] }],
    ["Snow", { minParam: 0, maxParam: 0, type: [] }],
    ["Normal", { minParam: 0, maxParam: 0, type: [] }],
    ["ToRain", { minParam: 0, maxParam: 0, type: [] }],
    ["ToSnow", { minParam: 0, maxParam: 0, type: [] }],
    ["ToNormal", { minParam: 0, maxParam: 0, type: [] }],

    ["CrossFade", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["KeepRes", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["KeepResolution", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["KeepResOff", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["KeepResolutionOff", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["Sepia", { minParam: 0, maxParam: 3, type: [ParamType.Number, ParamType.Boolean, ParamType.Number] }],
    ["SepiaToning", { minParam: 0, maxParam: 3, type: [ParamType.Number, ParamType.Boolean, ParamType.Number] }],
    ["ChangeSepiaStrength", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["SetSepiaNoiseMotion", { minParam: 1, maxParam: 1, type: [ParamType.Boolean] }],
    ["ChangeSepiaNoiseMotionPeriod", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    // keywords_preobj

    ["StrCenter", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["StrBottom", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["Str", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["String", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["CreateStr", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["CreateString", { minParam: 6, maxParam: 11, type: [ParamType.String, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.String, ParamType.Color, ParamType.Number, ParamType.Number] }],

    ["StrS", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["StrSize", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["StrF", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.String] }],
    ["StrFont", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.String] }],
    ["StrA", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["StrAlpha", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],

    ["StrC", { minParam: 2, maxParam: 4, type: [ParamType.Number, ParamType.Color, ParamType.Number, ParamType.Number] }],
    ["StrColor", { minParam: 2, maxParam: 4, type: [ParamType.Number, ParamType.Color, ParamType.Number, ParamType.Number] }],

    ["MS", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["MoveStr", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["DestroyStr", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["DestroyString", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["DestroyAllStr", { minParam: 0, maxParam: 0, type: [] }],
    ["DestroyAllString", { minParam: 0, maxParam: 0, type: [] }],

    ["Spe", { minParam: 1, maxParam: 1, type: [ParamType.File] }],

    ["MO", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["MoveObj", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["CG", { minParam: 1, maxParam: 1, type: [ParamType.File] }],
    ["CGChange", { minParam: 1, maxParam: 1, type: [ParamType.File] }],

    ["CPF", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CPatternFade", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CPFI", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CPatternFadeIn", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CPFO", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CPatternFadeOut", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CGPFI", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.File] }],
    ["CGPatternFadeIn", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.File] }],

    ["CGPFO", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.File] }],
    ["CGPatternFadeOut", { minParam: 2, maxParam: 2, type: [ParamType.File, ParamType.File] }],

    ["CharPF", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],
    ["CharPatternFade", { minParam: 3, maxParam: 3, type: [ParamType.File, ParamType.File, ParamType.Number] }],

    ["Char", { minParam: 2, maxParam: 6, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["Character", { minParam: 2, maxParam: 6, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["CC", { minParam: 2, maxParam: 5, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["CharChange", { minParam: 2, maxParam: 5, type: [ParamType.File, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["CA", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number,] }],
    ["CharAlpha", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number,] }],

    ["CharRotate", { minParam: 4, maxParam: 4, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["SetAutoArrange", { minParam: 1, maxParam: 1, type: [ParamType.Boolean] }],
    ["CD", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],
    ["CharDispose", { minParam: 1, maxParam: 1, type: [ParamType.Number] }],

    ["CAD", { minParam: 0, maxParam: 0, type: [] }],
    ["CharAllDispose", { minParam: 0, maxParam: 0, type: [] }],
    ["MC", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],
    ["MoveChar", { minParam: 3, maxParam: 7, type: [ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number, ParamType.Number] }],

    ["HideUI", { minParam: 0, maxParam: 0, type: [] }],
    ["ShowUI", { minParam: 0, maxParam: 0, type: [] }],

    ["Order", { minParam: 3, maxParam: 3, type: [ParamType.Number, ParamType.Number, ParamType.ObjType] }],
    ["Front", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["Back", { minParam: 2, maxParam: 2, type: [ParamType.Number, ParamType.Number] }],
    ["Forward", { minParam: 2, maxParam: 3, type: [ParamType.Number, ParamType.ObjType, ParamType.Number] }],
    ["Backward", { minParam: 2, maxParam: 3, type: [ParamType.Number, ParamType.ObjType, ParamType.Number] }],
]);