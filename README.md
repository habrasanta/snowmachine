# snowmachine

## Getting Started

```html
<!DOCTYPE html>
<canvas id="canvas"></canvas>
<script src="snowmachine.min.js"></script>
<script type="text/javascript">
  var backend = new snowmachine.CanvasBackend({
    element: document.getElementById("canvas")
  });
  var engine = new snowmachine.KafemanEngine(backend, 100);
  engine.start();
</script>
```
