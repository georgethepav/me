$src = "C:\Users\GeorgeBillam\Videos\SR 6"
$dst = "C:\CCA\georgebillam\public\srinterview2\media"

New-Item -ItemType Directory -Force -Path $dst | Out-Null
Get-ChildItem -Path $src -Filter "*.mp4" | ForEach-Object {
    Copy-Item $_.FullName -Destination $dst
    Write-Host "Copied: $($_.Name)"
}
Write-Host "Done."
