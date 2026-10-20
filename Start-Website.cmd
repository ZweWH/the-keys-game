@echo off
setlocal
cd /d "%~dp0"
set "KeysSiteNode=node"
where node >nul 2>nul
if errorlevel 1 set "KeysSiteNode=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
echo Open http://127.0.0.1:4173/the-keys-game/ in your browser.
echo Press Ctrl+C to stop the local website.
"%KeysSiteNode%" scripts\serve.mjs
pause
