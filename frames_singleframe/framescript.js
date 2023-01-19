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
            if (eachsize == "A5") {
                bhav += 299;
            }
            else if(eachsize == "A4"){
                bhav += 499;
            }
            else if(eachsize == "A3"){
                bhav += 799;
            }

        document.getElementById('bhaav').innerHTML = bhav;
        document.getElementById('bhaav').style.removeProperty('display')
    }
    //imagedelete
    
    const removeImagePrev = (event) => {
        event.target.parentElement.remove();
        bhavupdate();
        if (!document.getElementById('sortableImgThumbnailPreview').hasChildNodes()) {
            
            
                document.getElementById('noimages').style.removeProperty('display');
            
        }
    }
    
    
    //IMAGE LOAD
            var loadFile = function(event) {
        var container = document.getElementById('sortableImgThumbnailPreview'); 
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        const newImage = `<div class="RearangeBox rmbox imgThumbContainer" id="index${imageIndex}" style="padding: 10px; background-color: black; background-size: contain;">
            <i class="material-icons imgRemoveBtn" onclick="removeImagePrev(event)">delete</i>
            <i style="color: #eb845d;font-family: Quicksand;font-size: 14px;font-weight: 600;padding-top: 10px;padding-bottom: 10px;" class="material-icons imgcolorbtn" id="color0" onclick="colorframe(${imageIndex})">color</i>
            <i class="material-icons imgsize" id="size0" onclick="sizeframe(${imageIndex})" style="color: #eb845d;font-family: Quicksand;font-size: 14px;font-weight: 600;padding-top: 10px;padding-bottom: 10px;">size</i>
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
        var framer = document.getElementById('sortableImgThumbnailPreview')
        framer.style.removeProperty('display');
        bhavupdate(); 
        document.getElementById('payout').style.removeProperty('display')      
    };
    
  

    const inputclick = () => {
        document.getElementById('ima').click();
    }

    const uploadpic = async () => {
     var file =document.getElementById("ima").files[0];
     console.log(file);
      var formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploading");
      formData
      console.log(formData);
      await fetch("https://api.cloudinary.com/v1_1/dnokogmzj/image/upload", {
        method: "POST",
        
        body: formData
    })
    .then(result => console.log(result));
    document.getElementById('sortableImgThumbnailPreview').innerHTML = "";
    bhavupdate();
    


    }

    const uploadpicmobile = async () => {
        var file =document.getElementById("ima").files[0];
        console.log(file);
         var formData = new FormData();
         formData.append("file", file);
         formData.append("upload_preset", "uploading");
         formData
         console.log(formData);
         await fetch("https://api.cloudinary.com/v1_1/dnokogmzj/image/upload", {
           method: "POST",
           
           body: formData
       })
       .then(result => console.log(result));

    bhavupdate();
    document.getElementById('noimages').style.removeProperty('display');
    document.getElementById('sortableImgThumbnailPreview').innerHTML = "";
       }
