$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch '<link rel="icon"') {
        $content = $content -replace '</head>', "    <!-- Favicon -->`n    <link rel=`"icon`" type=`"image/svg+xml`" href=`"assets/images/logo.svg`">`n</head>"
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.Name)"
    }
}
