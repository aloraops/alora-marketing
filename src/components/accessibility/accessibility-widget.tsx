'use client';

import { useState, useEffect } from 'react';
import { Accessibility, Plus, Minus, X, Sun, Moon, Type, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccessibilitySettings {
  fontSize: number; // percentage (100 = normal)
  highContrast: boolean;
  reducedMotion: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    // Font size
    document.documentElement.style.fontSize = `${newSettings.fontSize}%`;

    // High contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  };

  // Save and apply settings
  const updateSettings = (newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const increaseFontSize = () => {
    if (settings.fontSize < 150) {
      updateSettings({ ...settings, fontSize: settings.fontSize + 10 });
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      updateSettings({ ...settings, fontSize: settings.fontSize - 10 });
    }
  };

  const toggleHighContrast = () => {
    updateSettings({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleReducedMotion = () => {
    updateSettings({ ...settings, reducedMotion: !settings.reducedMotion });
  };

  const resetSettings = () => {
    updateSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            className="fixed bottom-20 right-6 z-50 w-80 rounded-lg border border-border bg-background p-4 shadow-xl"
            role="dialog"
            aria-label="Accessibility settings"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close accessibility panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Font Size Control */}
            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Type className="h-4 w-4" />
                Font Size ({settings.fontSize}%)
              </label>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={settings.fontSize <= 80}
                  aria-label="Decrease font size"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={settings.fontSize >= 150}
                  aria-label="Increase font size"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-4">
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  settings.highContrast
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:bg-muted'
                }`}
                aria-pressed={settings.highContrast}
              >
                <span className="flex items-center gap-2">
                  {settings.highContrast ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  High Contrast
                </span>
                <span
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-primary' : 'bg-muted'
                  } relative`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="mb-4">
              <button
                onClick={toggleReducedMotion}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  settings.reducedMotion
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:bg-muted'
                }`}
                aria-pressed={settings.reducedMotion}
              >
                <span className="flex items-center gap-2">
                  Reduced Motion
                </span>
                <span
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-primary' : 'bg-muted'
                  } relative`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Reset Button */}
            <Button
              variant="outline"
              className="w-full"
              onClick={resetSettings}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </>
      )}
    </>
  );
}
