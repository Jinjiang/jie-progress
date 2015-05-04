# `<z-progress>`

Progress bar which supports progress events

## Attributes

- `status`: `info` | `success` | `warning` | `danger`
- `active` | `striped`
- `value`: 0 ~ 100

## Methods

- `bind(target)` | `unbind(target)`: Bind or unbind to a target which supports [Progress Events](http://www.w3.org/TR/progress-events/) spec. When a `<z-progress>` element is bound, the progress value of the target will be reflected.

## Examples

```
<z-progress value="30"></z-progress>
<z-progress value="40" status="success"></z-progress>
<z-progress value="50" status="info"></z-progress>
<z-progress value="60" status="warning"></z-progress>
<z-progress value="70" status="danger"></z-progress>
<z-progress value="80" striped></z-progress>
<z-progress value="90" striped status="success"></z-progress>
<z-progress value="110" striped status="info"></z-progress>
<z-progress value="-20" striped status="warning"></z-progress>
<z-progress value="20" striped status="warning"></z-progress>
<z-progress value="30" striped status="danger"></z-progress>
<z-progress value="40" striped active></z-progress>
<z-progress value="50" striped active status="success"></z-progress>
<z-progress value="60" striped active status="info"></z-progress>
<z-progress value="70" striped active status="warning"></z-progress>
<z-progress value="80" striped active status="danger"></z-progress>
<z-progress value="asdf" striped active status="danger"></z-progress>
```

### Progress Events

```
<z-progress id="z-progress-event" value="30" status="danger" active striped></z-progress>

<script>
  var target = document.createElement('div');
  target.lengthComputable = true;
  target.loaded = 0;
  target.total = 10000;

  var progress = document.querySelector('html /deep/ #z-progress-event');
  progress.bind(target);

  setInterval(function fire() {
    target.loaded = (target.loaded + 500) % 11000;
    target.dispatchEvent(new CustomEvent('progress'));
  }, 500);
</script>
```
