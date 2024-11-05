(function(){
  'use strict';

  var editor = document.getElementById('js-editor');
  var isComposition = false;

  //----------------------------------------------------------------------------

  document.addEventListener('selectionstart', onSelectionstart, false);
  document.addEventListener('selectionchange', onSelectionchange, false);

  function onSelectionstart(event) {
    console.log(event);
  }

  function onSelectionchange(event) {
    console.log(event);

    var sel = window.getSelection();

    console.log(sel.toString());
    console.log(sel.anchorNode, sel.anchorOffset);
    console.log(sel.focusNode, sel.focusOffset);
  }

  //----------------------------------------------------------------------------

  editor.addEventListener('beforeinput', onBeforeInput, false);
  editor.addEventListener('input', onInput, false);
  editor.addEventListener('keydown', onKeydown, false);
  editor.addEventListener('compositionstart', onCompositionStart, false)
  editor.addEventListener('compositionend', onCompositionEnd, false)

  function onBeforeInput(event) {
    console.log(event)
  }

  function onInput(event) {
    console.log(event)
  }

  function onKeydown(event) {
    console.log(isComposition);
    if (isComposition) {
      event.preventDefault();
    }
    console.log(event);
  }

  function onCompositionStart(event) {
    isComposition = true;
    console.log(event);
  }

  function onCompositionEnd(event) {
    isComposition = false;
    console.log(event);
  }
}());
