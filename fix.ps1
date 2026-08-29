$path = 'c:\Users\jviie\OneDrive\Escritorio\DarlingJavier\pages\album_nosotros.html'
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# 1. Padding and styles
$content = $content -replace 'padding-bottom: 20px;', 'padding-bottom: 45px;'
$content = $content -replace '\.timeline-date \{', ".timeline-date-floating { color: var(--primary); font-family: 'Dancing Script', cursive; font-size: 2.2rem; text-align: center; margin: 15px 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.1); }
      .timeline-date {"

# 2. Re-arrange timeline items
$content = [regex]::Replace($content, '(?s)<div class="timeline-half top-half">\s*<div class="timeline-content"([^>]*)>\s*<img src="([^"]+)" alt="([^"]+)" />\s*<div class="timeline-date">([^<]+)</div>\s*<p class="timeline-desc">[^<]+</p>\s*</div>\s*</div>', '<div class="timeline-half top-half">
              <div class="timeline-content">
                <img src="" alt="" />
              </div>
              <div class="timeline-date-floating"></div>
            </div>')

$content = [regex]::Replace($content, '(?s)<div class="timeline-half bottom-half">\s*<div class="timeline-content"([^>]*)>\s*<img src="([^"]+)" alt="([^"]+)" />\s*<div class="timeline-date">([^<]+)</div>\s*<p class="timeline-desc">[^<]+</p>\s*</div>\s*</div>', '<div class="timeline-half bottom-half">
              <div class="timeline-date-floating"></div>
              <div class="timeline-content">
                <img src="" alt="" />
              </div>
            </div>')

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
