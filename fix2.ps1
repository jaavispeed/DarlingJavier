$path = 'c:\Users\jviie\OneDrive\Escritorio\DarlingJavier\pages\album_nosotros.html'
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# 1. Padding and styles
$content = $content -replace 'padding-bottom: 20px;', 'padding-bottom: 45px;'
$content = $content -replace '\.timeline-date \{', ".timeline-date-floating { color: var(--primary); font-family: 'Dancing Script', cursive; font-size: 2.2rem; text-align: center; margin: 15px 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.1); }`n      .timeline-date {"

# 2. Add New Elemento 4 (Mayo 2025)
$newEl = @"
            <div class="timeline-half bottom-half empty-half"></div>
          </div>

          <!-- Elemento 4: Abajo (NEW) -->
          <div class="timeline-item">
            <div class="timeline-node">💜</div>
            <div class="timeline-half top-half empty-half"></div>
            <div class="timeline-half bottom-half">
              <div class="timeline-content" style="transform: rotate(-2deg);">
                <img src="../assets/img/Nosotros/2025Mayo.jpg" alt="Mayo 2025" />
                <div class="timeline-date">Mayo 2025</div>
                <p class="timeline-desc">Nuevos recuerdos</p>
              </div>
            </div>
          </div>

          <!-- Elemento 5: Arriba (old 4) -->
"@
$content = $content -replace '            <div class="timeline-half bottom-half empty-half"></div>\s*</div>\s*<!-- Elemento 4: Abajo -->', $newEl

# 3. Flip old elements top/bottom to maintain pattern
$content = $content -replace '<!-- Elemento 5: Arriba \(old 4\) -->\s*<div class="timeline-item">\s*<div class="timeline-node">💜</div>\s*<div class="timeline-half top-half empty-half"></div>\s*<div class="timeline-half bottom-half">', '<!-- Elemento 5: Arriba -->
          <div class="timeline-item">
            <div class="timeline-node">💜</div>
            <div class="timeline-half top-half">'

$content = $content -replace '</div>\s*</div>\s*</div>\s*<!-- Elemento 5: Arriba -->', '</div>
            </div>
            <div class="timeline-half bottom-half empty-half"></div>
          </div>

          <!-- Elemento 6: Abajo (old 5) -->'

$content = $content -replace '<!-- Elemento 6: Abajo \(old 5\) -->\s*<div class="timeline-item">\s*<div class="timeline-node">💜</div>\s*<div class="timeline-half top-half">\s*<div class="timeline-content" style="transform: rotate\(-1deg\);">', '<!-- Elemento 6: Abajo -->
          <div class="timeline-item">
            <div class="timeline-node">💜</div>
            <div class="timeline-half top-half empty-half"></div>
            <div class="timeline-half bottom-half">
              <div class="timeline-content" style="transform: rotate(3deg);">'

$content = $content -replace '<img src="\.\./assets/img/Nosotros/2026Enero2\.jpg" alt="Enero 2026" />\s*<div class="timeline-date">Enero 2026</div>\s*<p class="timeline-desc">Más amor</p>\s*</div>\s*</div>\s*<div class="timeline-half bottom-half empty-half"></div>\s*</div>\s*<!-- Elemento 6: Abajo -->', '<img src="../assets/img/Nosotros/2026Enero2.jpg" alt="Enero 2026" />
                <div class="timeline-date">Enero 2026</div>
                <p class="timeline-desc">Más amor</p>
              </div>
            </div>
          </div>

          <!-- Elemento 7: Arriba (old 6) -->'

$content = $content -replace '<!-- Elemento 7: Arriba \(old 6\) -->\s*<div class="timeline-item">\s*<div class="timeline-node">💜</div>\s*<div class="timeline-half top-half empty-half"></div>\s*<div class="timeline-half bottom-half">', '<!-- Elemento 7: Arriba -->
          <div class="timeline-item">
            <div class="timeline-node">💜</div>
            <div class="timeline-half top-half">'

$content = $content -replace '</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*<div id="inline-player">', '</div>
              <div class="timeline-half bottom-half empty-half"></div>
            </div>
          </div>
        </div>
        
        <div id="inline-player">'

# 4. Re-arrange timeline items to pull out the dates
$content = [regex]::Replace($content, '(?s)<div class="timeline-half top-half">\s*<div class="timeline-content"([^>]*)>\s*<img src="([^"]+)" alt="([^"]+)" />\s*<div class="timeline-date">([^<]+)</div>\s*<p class="timeline-desc">[^<]+</p>\s*</div>\s*</div>', '<div class="timeline-half top-half">`r`n              <div class="timeline-content"$1>`r`n                <img src="$2" alt="$3" />`r`n              </div>`r`n              <div class="timeline-date-floating">$4</div>`r`n            </div>')

$content = [regex]::Replace($content, '(?s)<div class="timeline-half bottom-half">\s*<div class="timeline-content"([^>]*)>\s*<img src="([^"]+)" alt="([^"]+)" />\s*<div class="timeline-date">([^<]+)</div>\s*<p class="timeline-desc">[^<]+</p>\s*</div>\s*</div>', '<div class="timeline-half bottom-half">`r`n              <div class="timeline-date-floating">$4</div>`r`n              <div class="timeline-content"$1>`r`n                <img src="$2" alt="$3" />`r`n              </div>`r`n            </div>')


[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
