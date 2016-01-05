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
  var engine = new snowmachine.SimpleEngine({
    backend: backend,
    angle: 45
  });
  engine.start();
</script>
```
