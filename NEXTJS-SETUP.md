# Cambio a Next.js - Instrucciones

## Paso Final Requerido

Para completar la migración a Next.js, debes editar manualmente el archivo `.replit`:

### 1. Mostrar archivos ocultos
- Click en los 3 puntos en el panel de archivos
- Selecciona "Show hidden files"

### 2. Editar `.replit`
Abre el archivo `.replit` y modifica:

**Línea 57** - Cambiar el comando:
```
args = "next dev"
```

**Línea 58** - Cambiar el puerto:
```
waitForPort = 3000
```

### 3. Guardar y Reiniciar
- Guarda el archivo (Ctrl+S o Cmd+S)
- Click en "Stop" y luego "Run" para reiniciar

## Resultado

Verás Next.js iniciarse en puerto 3000:
```
▲ Next.js 16.0.3 (Turbopack)
✓ Ready in ~1-4s
```

## Estado Actual

✅ Next.js 16 completamente configurado
✅ Todos los componentes migrados
✅ SEO optimizado
✅ i18next configurado
✅ Animaciones funcionando

Solo falta cambiar el workflow para que use Next.js en lugar de Vite.
