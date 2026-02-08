$path = "c:\Users\mario\OneDrive\Desktop\tbc-plus - Copy\src\components\TalentCalculator.jsx"
$content = Get-Content $path -Raw

# Define the new content
$newContent = @"
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded p-4 border border-white/5">
                                <h4 className="font-bold text-gray-400 text-sm mb-2 flex items-center gap-2">
                                    <img src={CLASS_CONFIG[activeClass].crest.split('?')[0]} className="w-5 h-5 rounded" />
                                    {CLASS_CONFIG[activeClass].name} Updates
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {(CHANGELOG_DATA[activeClass] || []).map((change, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className={`font-mono ${change.type === 'new' ? 'text-green-500' : change.type === 'rework' ? 'text-amber-500' : 'text-blue-500'}`}>
                                                [{change.type.toUpperCase()}]
                                            </span>
                                            <span>
                                                <strong>{change.name}</strong> {change.desc}
                                            </span>
                                        </li>
                                    ))}
                                    {(!CHANGELOG_DATA[activeClass] || CHANGELOG_DATA[activeClass].length === 0) && (
                                        <li className="text-gray-600 italic">No specific changes listed for this class yet.</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* GLYPH MODAL */}
"@

# Regex to find the block
# Matches from <div className="space-y-4"> AFTER "Class Design Changelog" up to {/* GLYPH MODAL */}
# We need to be careful to include the closing divs that are currently surrounding the hardcoded content.
# The hardcoded content ends with many closing divs.
# The replaced content above includes the closing divs.

# Pattern:
# 1. Find the header content: Class Design Changelog</h3>...</div>
# 2. Match <div className="space-y-4">
# 3. Match everything until {/* GLYPH MODAL */}

$pattern = '(?s)(Class Design Changelog</h3>\s*</div>\s*)<div className="space-y-4">.*?(?=\{/\* GLYPH MODAL \*/})'

# Replacement
$replacement = '${1}' + $newContent

if ($content -match $pattern) {
    $result = $content -replace $pattern, $replacement
    Set-Content -Path $path -Value $result -Encoding UTF8
    Write-Host "Successfully replaced changelog."
} else {
    Write-Host "Pattern not found."
}
