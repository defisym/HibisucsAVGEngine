@echo off

rem Init
Set APPID=1315620
Set AppName=EndlessShinyBlues
Set ScriptPath=F:\DEV\_Steamworks_SDK\tools\ContentBuilder\scripts\app_build_1315620.vdf
Set ContentPath=F:\DEV\_Steamworks_SDK\tools\ContentBuilder\content\%AppName%\
Set SteamCMDPath=F:\DEV\_Steamworks_SDK\tools\ContentBuilder\builder\steamcmd.exe

Set curPath=%~dp0

@echo delete old content...

rem Clean Content Path
for /r "%ContentPath%" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rmdir /s /q "%ContentPath%\data\"
rmdir /s /q "%ContentPath%\savings\"
rmdir /s /q "%ContentPath%\settings\"
rmdir /s /q "%ContentPath%\localization\"
rmdir /s /q "%ContentPath%\Modules\"

@echo Generate New Content...

rem Update Content
xcopy "%curPath%\data\*.*" "%ContentPath%\data\" /s /e
echo f | xcopy "%curPath%\settings\settings_Template.ini" "%ContentPath%\settings\setting.ini" /s /e

xcopy "%curPath%\savings\_Sys\*.*" "%ContentPath%\savings\_Sys\" /s /e
echo f | xcopy "%curPath%\savings\_Global\_GlobalProgress_Template" "%ContentPath%\savings\_Global\_GlobalProgress" /s /e
echo f | xcopy "%curPath%\savings\_Global\Appreciation_Definition_Template" "%ContentPath%\savings\_Global\Appreciation_Definition" /s /e
echo f | xcopy "%curPath%\savings\_Global\Appreciation_Progress_Template" "%ContentPath%\savings\_Global\Appreciation_Progress" /s /e
echo f | xcopy "%curPath%\savings\_Global\Data_Template" "%ContentPath%\savings\qdata.sav" /s /e

xcopy "%curPath%\Modules\*.*" "%ContentPath%\Modules\" /s /e
xcopy "%curPath%\localization\*.*" "%ContentPath%\localization\" /s /e

echo f | xcopy "%curPath%\%AppName%.dat" "%ContentPath%" /s /e

@REM echo f | xcopy "%curPath%\%AppName%.exe" "%ContentPath%\%AppName%.exe" /s /e
@REM echo f | xcopy "%curPath%\%AppName%_Wrapper.exe" "%ContentPath%\%AppName%.exe" /s /e

REM Delete Temp Files
del "%ContentPath%\CrashLog.Log" /f /s /q
del "%ContentPath%\ContentGenerator.bat" /f /s /q

for /r "%ContentPath%" %%F in (*.file) do (
	del "%%F" /f /s /q	
)

for /r "%ContentPath%" %%F in (*.mfa) do (
	del "%%F" /f /s /q	
)

for /r "%ContentPath%" %%F in (*.001) do (
	del "%%F" /f /s /q	
)

for /r "%ContentPath%\_Docs" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rmdir /s /q "%ContentPath%\_Docs\"

for /r "%ContentPath%\data\dialogue\_External" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rmdir /s /q "%ContentPath%\data\dialogue\_External\"

for /r "%ContentPath%\data\dialogue\_Tests" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rmdir /s /q "%ContentPath%\data\dialogue\_Tests\"

for /r "%ContentPath%\data\dialogue\_Template" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rmdir /s /q "%ContentPath%\data\dialogue\_Template\"

for /r "%ContentPath%\data\dialogue\labels" %%F in (*.*) do (
	del "%%F" /f /s /q	
)

rem Steam Init
Set SteamUser=defisym
REM Set SteamPassword=your Password
Set /p SteamPassword=Please input SteamPassword : 
Set /p SteamGuard=Please input SteamGuard : 

@echo Building New Content...

rem Build Content
@REM %SteamCMDPath% +login %SteamUser% %SteamPassword% %SteamGuard% +run_app_build %ScriptPath% +quit
%SteamCMDPath% +login %SteamUser% %SteamPassword% %SteamGuard% +drm_wrap %APPID% "%curPath%\%AppName%.exe" "%ContentPath%\%AppName%.exe" drmtoolp 0 +run_app_build %ScriptPath% +quit

exit
