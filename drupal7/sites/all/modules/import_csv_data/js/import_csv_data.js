/**
 * @file
 * Implement a simple, JS functionality.
 */

(function ($) {
  Drupal.behaviors.ImportCSVdata = {
    attach: function() {
      $('input[name=table_name]').keyup(function(){
        var textValue = $(this).val();
        var suffixText = "";
        if (textValue != "") {
          textValue = textValue.replace(/[^A-Za-z0-9\s]/gi,'').replace(/[\s]/gi,'_');
          suffixText = "Name of Table being created/updated : " + "<strong>csv_import_" + textValue + "</strong>";
        }
        $('span.field-suffix').html(suffixText);
      });
    }
  }
})(jQuery);
