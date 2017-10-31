(function( $ ) {
  $.fn.oprosVk = function(params) {
    var options = $.extend({
      'type': 'open',
      'inputSubjectName': 'subject',
      'inputOptionTextClass': 'optiontext',
      'inputOptionCountClass': 'optionval',
      'result': '#result'
    }, params);

    var form = this;
    return this.submit((e)=>{
      e.preventDefault();
      var graph = {};

      switch (options.type) {
        case 'open':
          graph.type = 'Открытое голосование';
          break;
        case 'anon':
          graph.type = 'Анонимное голосование';
          break;
        case 'input':
          graph.type = this.find('input[name="type"]').val();
          graph.type = graph.type == 'open' ? 'Открытое голосование' : 'Анонимное голосование';
          break;
      }

      var total = 0;
      var max = 0;
      graph.options = [];
      graph.vals = form.find('input.'+options.inputOptionCountClass);
      form.find('input.'+options.inputOptionTextClass).each(function(i,el) {
        var txt = $(el).val();
        var val = $(graph.vals[i]).val();
        if (max < val) max = parseInt(val);
        total += parseInt(val);
        graph.options.push({
          'txt': txt,
          'val': val
        });
      });
      graph.optionsHtml = '';
      graph.options.forEach(function(item) {
        var per = (item.val / total * 100).toFixed(1);
        var gper = (item.val / max * 100).toFixed();
        graph.optionsHtml += '<div class="p"><div class="pt">'+item.txt+'</div><div><div class="per">'+per+'%</div><div class="pool"><div class="pb" style="width:'+gper+'%"></div><div class="pc">'+item.val+'</div></div></div></div>';
      });

      graph.subject = form.find('input[name="'+options.inputSubjectName+'"]').val();

      var result = '<div class="box"><div class="h"><div class="t">'+graph.type+'</div><div class="s">'+graph.subject+'</div></div><div>'+graph.optionsHtml+'</div><div class="b"><a class="a" href="">Получить код</a><div>Проголосовали <b>' + total + '</b> человек.</div></div></div>';
      $(options.result).html(result);
      return this;
    });
  };
})(jQuery);
