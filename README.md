# progress

图标

* 支持 status="info|success|warning|danger" 四种状态
* 支持 active, striped 两种特效
* 支持 value 值，从 0 到 100
* 可以 bind/unbind 到一个支持 [Progress Events](http://www.w3.org/TR/progress-events/) 规范的对象

## Example

```html
<jie-progress value="30" status="danger" active striped></jie-progress>

<script>
  var progress = document.querySelector('jie-progress');
  var xhr = new XMLHttpRequest();
  ...
  progress.bind(xhr);
  progress.addEventListener('progress', function (e) {
    console.log(this.value);
  });
</script>
```
