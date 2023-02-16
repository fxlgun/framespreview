function turnwhite(cropnum) {
  var mainid = "index" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.backgroundColor = "white";
  celement.style.backgroundImage = "none";
  localStorage.setItem("color" + cropnum, "white");
  var mainid = "choosecolor" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "none";
  localStorage.setItem("color" + cropnum, "white");
}

function turnblack(cropnum) {
  var mainid = "index" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.backgroundColor = "black";
  celement.style.backgroundImage = "none";
  localStorage.setItem("color" + cropnum, "black");
  var mainid = "choosecolor" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "none";
  localStorage.setItem("color" + cropnum, "black");
}

function updatesize(cropnum) {
  var mainid = "index" + cropnum;
  var selectedsize = document.getElementById("sizeoptions" + cropnum).value;
  var selectedwidth;
  var selectedheight;
  if (selectedsize == "A5 (portrait)") {
    selectedwidth = "148px";
    selectedheight = "210px";
  }

  if (selectedsize == "A4 (portrait)") {
    selectedwidth = "210px";
    selectedheight = "297px";
  }

  if (selectedsize == "A3 (portrait)") {
    selectedwidth = "297px";
    selectedheight = "420px";
  }
  if (selectedsize == "A5 (landscape)") {
    selectedwidth = "210px";
    selectedheight = "148px";
  }

  if (selectedsize == "A4 (landscape)") {
    selectedwidth = "297px";
    selectedheight = "210px";
  }

  if (selectedsize == "A3 (landscape)") {
    selectedwidth = "420px";
    selectedheight = "297px";
  }

  var tile = document.getElementById(mainid);
  tile.style.width = selectedwidth;
  tile.style.height = selectedheight;
  localStorage.setItem("size" + cropnum, selectedsize);
  var mainid = "choosesize" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "none";
  var celement = document.getElementById("ssize" + cropnum);
  celement.innerHTML = selectedsize;
}

function colorframe(cropnum) {
  var mainid = "choosecolor" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "block";
  var mainid = "choosesize" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "none";
}

function sizeframe(cropnum) {
  var mainid = "choosesize" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "block";
  var mainid = "choosecolor" + cropnum;
  var celement = document.getElementById(mainid);
  celement.style.display = "none";
}

var imageIndex = 0;
//PRICEEE

//imagedelete

const removeImagePrev = (event) => {
  event.target.parentElement.remove();
  document.getElementById("ima").value = ""
  if (document.getElementById("ima").parentElement.tagName == "DIV") {
    document.getElementById(
      "sortableImgThumbnailPreview"
    ).innerHTML = `<div style="text-align: left;">
            <ol style="
              line-height: 2;
              font-size: 1.4em;
              padding: 3em;
          " id="noimages"><li>Select image from your computer.</li> 
        <li>See preview in frame.</li>
        <li>Upload and submit the desired picture below from upload button.</li>
        <li>Add to cart if you like preview.</li>
    <li>To add multiple images, repeat the process from step 1.</li></ol>  
          </div>`;
  } else {
    document.getElementById("ima").value = ""
    document.getElementById("noimages").style.removeProperty("display");
  }
};

//IMAGE LOAD
var loadFile = function (event) {
  var container = document.getElementById("sortableImgThumbnailPreview");
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
                    <span style="color: black;font-weight: 500;font-family: 'roboto';">Size :</span> 
                    <select onchange="updatesize(${imageIndex})" name="sizeoptions" id="sizeoptions${imageIndex}" style=" text-align: center; font-size: 14px ;border: 0px solid #80808014;padding-left: 0.5em;padding-right: 0.5em;">
                        <option value="A5 (portrait)">A5 (portrait)</option>
                        <option value="A4 (portrait)">A4 (portrait)</option> 
                        <option value="A3 (portrait)">A3 (portrait)</option>
                        <option value="A5 (landscape)">A5 (landscape)</option>
                        <option value="A4 (landscape)">A4 (landscape)</option> 
                        <option value="A3 (landscape)">A3 (landscape)</option>
                    </select> 
                </div>
            </div>
            <div style="color: black;margin-top: 24px;">Size : <span class="sizerender" id="ssize0">A5 (portrait)</span>
        </div> `;
  container.innerHTML = newImage;
  var framer = document.getElementById("sortableImgThumbnailPreview");
  framer.style.removeProperty("display");
};

const inputclick = () => {
  document.getElementById("ima").click();
};
