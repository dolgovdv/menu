/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






/* wrap all textNodes into spans */
function ue_startTree(tree){

    for (var i = 0; i < treeLis.length; i++) {
      var li = treeLis[i];

      var span = document.createElement('span');
      li.insertBefore(span, li.firstChild);
      span.appendChild(span.nextSibling);
    }
}
