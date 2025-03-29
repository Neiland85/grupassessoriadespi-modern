"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    marketing: false,
    analytics: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      performance: true,
      marketing: true,
      analytics: true,
    })
    localStorage.setItem("cookieConsent", "all")
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    setPreferences({
      essential: true,
      performance: false,
      marketing: false,
      analytics: false,
    })
    localStorage.setItem("cookieConsent", "essential")
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Utilizamos cookies para mejorar tu experiencia. Puedes elegir qué cookies aceptar o rechazar.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Personalizar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Preferencias de cookies</DialogTitle>
                <DialogDescription>
                  Personaliza tus preferencias de cookies. Las cookies esenciales no se pueden desactivar ya que son
                  necesarias para el funcionamiento del sitio.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cookies esenciales</Label>
                    <p className="text-sm text-muted-foreground">Necesarias para el funcionamiento básico del sitio</p>
                  </div>
                  <Switch checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cookies de rendimiento</Label>
                    <p className="text-sm text-muted-foreground">Ayudan a mejorar el rendimiento del sitio</p>
                  </div>
                  <Switch
                    checked={preferences.performance}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, performance: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cookies de marketing</Label>
                    <p className="text-sm text-muted-foreground">Utilizadas para mostrar publicidad relevante</p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cookies de análisis</Label>
                    <p className="text-sm text-muted-foreground">Nos ayudan a entender cómo utilizas el sitio</p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowPreferences(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleSavePreferences}>Guardar preferencias</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" onClick={handleRejectAll}>
            Rechazar todo
          </Button>
          <Button size="sm" onClick={handleAcceptAll}>
            Aceptar todo
          </Button>
        </div>
      </div>
    </div>
  )
}

