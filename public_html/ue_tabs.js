/* 

 */
onload = function () {
    var $upkm_dev = $('#Content_Devices').width( window.innerWidth - 328 );
    
    var $upkm_dev = $('#Content_Diagram').width( window.innerWidth - 328 );
    var $upkm_dev = $('#Content_Reports').width( window.innerWidth - 328 );
    var $upkm_dev = $('#Content_Logs').width( window.innerWidth - 328 );
    
}

function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        //evt.currentTarget.firstChild.className = "app";
    }
    
    document.getElementById(TabName).style.display = "block";
    document.getElementById("Content_"+TabName).style.display = "block";
    
    
    evt.currentTarget.className += " active";

    evt.currentTarget.firstChild.className += " current";
}
document.getElementById("defaultOpen").click();

