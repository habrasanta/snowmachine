# snowmachine

## Getting Started

```html
<!DOCTYPE html>
<canvas id="canvas"></canvas>
<script src="snowmachine.min.js"></script>
<script type="text/javascript">
  var canvas = document.getElementById("canvas");
  var backend = new snowmachine.CanvasBackend(canvas);
  var engine = new snowmachine.KafemanEngine(backend, 100);
  engine.start();
</script>
```
