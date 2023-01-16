function turnwhite(cropnum){
    var mainid= "index" + cropnum;
    var celement = document.getElementById(mainid);
    celement.style.backgroundColor = 'white';  
    celement.style.backgroundImage = 'none';
    localStorage.setItem("color"+cropnum, 'white'); 
    var mainid = "choosecolor"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
     localStorage.setItem("color"+cropnum,"white");
    }
    
    function turnblack(cropnum){
    
    var mainid= "index" + cropnum;
    var celement = document.getElementById(mainid);
    celement.style.backgroundColor = 'black';  
    celement.style.backgroundImage = 'none';
    localStorage.setItem("color"+cropnum, 'black'); 
    var mainid = "choosecolor"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
        localStorage.setItem("color"+cropnum,"black");
    }
    
    
    
    
    
    function updatesize(cropnum){
        bhavupdate();
        var mainid= "index" + cropnum;
        var selectedsize = document.getElementById("sizeoptions"+cropnum).value;
        var selectedwidth;
        var selectedheight;
        if (selectedsize == "A5"){
            selectedwidth = "148px";
            selectedheight = "210px";
        }
        
         if (selectedsize == "A4"){
            selectedwidth = "210px";
            selectedheight = "297px";
        }
        
         if (selectedsize == "A3"){
            selectedwidth = "297px";
            selectedheight = "420px";
        }
        
        var tile = document.getElementById(mainid);
        tile.style.width = selectedwidth;
        tile.style.height = selectedheight;
        localStorage.setItem("size"+cropnum, selectedsize); 
        var mainid = "choosesize"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
    var celement = document.getElementById("ssize"+cropnum);
    celement.innerHTML = selectedsize;
    
    
    
    
    }
    
    
    
    
    function updatematerial(cropnum){
        var mainid= "index" + cropnum;
        var selectedmaterial = document.getElementById("materialoptions"+cropnum).value;
       
    
        localStorage.setItem("material"+cropnum, selectedmaterial); 
        var mainid = "choosematerial"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
    var celement = document.getElementById("smaterial"+cropnum);
    celement.innerHTML = selectedmaterial;
    
    
    
    
    updatepriced();
    }
    
    
    function colorframe(cropnum){
    var mainid = "choosecolor"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "block";
    var mainid = "choosesize"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
    }
    
    
    
    function sizeframe(cropnum){
    var mainid = "choosesize"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "block";
    var mainid = "choosecolor"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
    
    
    }
    
    function material(cropnum){
    var mainid = "choosematerial"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "block";
    var mainid = "choosecolor"+cropnum;
    var celement = document.getElementById(mainid);
    celement.style.display = "none";
    
    
    }
    
    function updatepriced(){
     var w8h8matte = 0;
        var w8h10matte = 0;
        var w10h8matte = 0;
         
                   
    
         var rearangeBox = document.getElementsByClassName('RearangeBox');
         var totalimages = localStorage.getItem('nonverifiedtotalimages');
       for (let i = 0; i < totalimages; i++) {
         
         if (localStorage.getItem('tileremoved'+i)){
        
             
         }else{
             
            var celement = localStorage.getItem('size'+i);
           var cmaterial = localStorage.getItem('material'+i);
    console.log(celement);
           if ((celement=="A5")&&(cmaterial=="Matte")){
               w8h8matte = w8h8matte + 1;
                localStorage.setItem("w8h8matte", w8h8matte);
           }
           
            if ((celement=="A4")&&(cmaterial=="Matte")){
               w8h10matte = w8h10matte + 1;
                localStorage.setItem("w8h10matte", w8h10matte);
           }
            if ((celement=="A3")&&(cmaterial=="Matte")){
               w10h8matte = w10h8matte + 1;
                localStorage.setItem("w10h8matte", w10h8matte);
           }
        
             
         }
        
        
       
    }
        
     
    var w8h8matte   = localStorage.getItem("w8h8matte");
    var w8h10matte  = localStorage.getItem("w8h10matte");
    var w10h8matte  = localStorage.getItem("w10h8matte");
    
    
    
     
    
    
    
    
    
    
    for (let i = 0; i < totalimages; i++) {
         
         if (localStorage.getItem('tileremoved'+i)){
        
             
         }else{
              var material = localStorage.getItem('material'+i);
              var size = localStorage.getItem('size'+i);
              if(size == "A5"){
                  var sizecost = 333;
              }
              else if(size == "A4"){
                  var sizecost = 420;
              }
              else if(size == "A3"){
                  var sizecost = 420;
              }
             
              else{
                  
              }
              
              
              
              
              
              
            
         }}
         
         
         var materialprice = totalprice - pricewithoutmaterial;
         localStorage.setItem("materialprice",materialprice);
         
    console.log(totalprice);
     var total = document.getElementById("ktotalcharges1");
     total.innerHTML = totalprice + shippingcost;
     
     var totalcharges = document.getElementById("totalcharges");
     totalcharges.innerHTML = totalprice + shippingcost;
     
      var totalcharges = document.getElementById("ktotalcharges3");
     totalcharges.innerHTML = totalprice + shippingcost;
     
     var totalcharges = document.getElementById("ktotalcharges2");
     totalcharges.innerHTML = totalprice + shippingcost;
     
     
    var totaltilles = localStorage.getItem("totalimages");
      var mtotaltiles = document.getElementById("mtotaltiles");
     mtotaltiles.innerHTML = totaltilles;
    
    localStorage.setItem("total",totalprice);
    
    }
    
    //IMAGE ARRAY;
    var imageIndex = 0;
    
    //PRICEEE
    var bhav;
    const bhavupdate = () => {
        bhav = 0;
        const framer = document.getElementById('sortableImgThumbnailPreview').children;
        const childrenArray = [...framer]
        if (childrenArray.length === 0) {
            bhav = 0;
            document.getElementById('bhaav').innerHTML = bhav;
            document.getElementById('bhaav').style.display = "none";
        return;
        }
        // console.log(children[0].children[5].children[0].children[1].value);
        
            const eachsize = childrenArray[0].children[5].children[0].children[1].value
            console.log(eachsize);
            if (eachsize == "A5") {
                bhav += 299;
            }
            else if(eachsize == "A4"){
                bhav += 499;
            }
            else if(eachsize == "A3"){
                bhav += 799;
            }
    
        console.log(bhav);
        document.getElementById('bhaav').innerHTML = bhav;
        document.getElementById('bhaav').style.removeProperty('display')
    }
    //imagedelete
    
    const removeImagePrev = (event) => {
        event.target.parentElement.remove();
        bhavupdate();
    }
    
    
    //IMAGE LOAD
            var loadFile = function(event) {
        var container = document.getElementById('sortableImgThumbnailPreview'); 
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        const newImage = `<div class="RearangeBox rmbox imgThumbContainer" id="index${imageIndex}" style="padding: 10px; background-color: black; background-size: contain;">
            <i class="material-icons imgRemoveBtn" onclick="removeImagePrev(event)">delete</i>
            <i style="color: #e91e63ba;font-family: Quicksand;font-size: 14px;font-weight: 600;padding-top: 10px;padding-bottom: 10px;" class="material-icons imgcolorbtn" id="color0" onclick="colorframe(${imageIndex})">color</i>
            <i class="material-icons imgsize" id="size0" onclick="sizeframe(${imageIndex})" style="color: #e91e63ba;font-family: Quicksand;font-size: 14px;font-weight: 600;padding-top: 10px;padding-bottom: 10px;">size</i>
            <div class="IMGthumbnail" id="bg0" style="background-color: rgb(250, 250, 250); padding: 0px;">
                <img src="${imageUrl}" id="output">
            </div>
            <div class="choosecolor" id="choosecolor${imageIndex}" style="position: absolute; width: 92%; bottom: 5%; margin: auto; display: none;">
                <div style="padding-top: 0.7em;display: flex; flex-wrap: wrap; justify-content: space-around;margin-top: 25px;background: white !important;box-shadow: 0px 0px 10px #00000014;padding-left: 12px;padding-right: 12px;padding-bottom: 0.7em;border-radius: 12px">
                     <div id="ccblack1" onclick="turnblack(${imageIndex})" class="cselected" style="background: black;width: 1.5em;height: 1.5em;border-radius: 85px;cursor: pointer;border: 1px solid #c2c2;box-shadow: -1px 0px 85px #00000057;">
                    </div>
                     <div id="ccwhite1" onclick="turnwhite(${imageIndex})" style="background: white;width: 1.5em;height: 1.5em;border-radius: 85px;cursor: pointer;border: 1px solid #c2c2c2;box-shadow: -1px 0px 85px #00000057;"></div>
                </div>
            </div>
            <div class="choosesize" id="choosesize${imageIndex}" style="position: absolute; width: 92%; bottom: 5%; margin: auto; display: none;">
                <div style="padding-top: 0.7em;display: flex; flex-wrap: wrap; justify-content: space-around;margin-top: 25px;background: white !important;box-shadow: 0px 0px 10px #00000014;padding-left: 12px;padding-right: 12px;padding-bottom: 0.7em;border-radius: 12px"> 
                    <span style="color: black;font-weight: 500;font-family: 'roboto';">Select Size :</span> 
                    <select onchange="updatesize(${imageIndex})" name="sizeoptions" id="sizeoptions${imageIndex}" style="border: 0px solid #80808014;padding-left: 0.5em;padding-right: 0.5em;">
                        <option value="A5">A5</option>
                        <option value="A4">A4</option> 
                        <option value="A3">A3</option>
                    </select> 
                </div>
            </div>
            <div style="color: black;margin-top: 24px;">Size : <span class="sizerender" id="ssize0">A5</span>
        </div> `        
        container.innerHTML = newImage;
        console.log(event.target);
        var framer = document.getElementById('sortableImgThumbnailPreview')
        framer.style.removeProperty('display');
        event.target.value="";
        bhavupdate();
    };
    
    const inputclick = () => {
        document.getElementById('ima').click();
    }