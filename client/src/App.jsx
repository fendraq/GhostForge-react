import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 class="siteName"><span id="ghost">Ghost</span> <span id="forge">Forge</span></h1>
        <button id="tutorialButton">Help</button> {/* Extract */}
      </header>
      <main>
        <section class="container categories">
          <div class="subContainer" id="categoryList">
            <h2>Materials</h2>
          </div>
          <div class="subContainter categoryList">
            <ul>
              <li class="category">Forged stories
                <ul class="categoryBorder" id="stories">
                  {/* add stories in list: <li class="item" data-price="200" id="AAAA">Smith of Words<button class="item-add">inspect</button></li>, which is in JSON */}
                </ul>
              </li>
              <li class="category">Forge Your Story
                <ul class="categoryBorder" id="itemList">
                  {/* add story elements in list:  <li class="item" data-price="30" id="BAAA">Setting<button class="item-add">inspect</button></li> which is in JSON*/}
                </ul>
              </li>
              <li class="category">Inscribe on
                <ul class="categoryBorder" id="inscription">
                  {/* add inscription alternatives in list: <li class="item" data-price="30" id="CAAA">PDF<button class="item-add">inspect</button></li> which is in JSON */}
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="containter itemCardContainer">
          <div class="itemCard" id="itemCard">
            {/* hämta beroende på state: 
            --> onLoad: #welcome:
            <div class="subContainer" id="welcome"> <!--kan man sätta detta på on load page??-->
              <h2>Welcome to the Ghost Forge, where words are wrought to stories</h2>
              <p>At this page you can choose finnished stories or you can forge them to your liking. Click on the "Help" button for a tutorial</p>
              <div class="subContainer">
                <h3>The Smith of Words - exerpt</h3>
                <p>Winter gripped Victorian London in its icy embrace, turning cobbled streets into mirrors that glistened under the fading twilight. Somewhere in the twisting alleys...<br><br>Ghost Smith was the last of his kind, the rare "wordsmith," and the secrets to crafting the perfect story lay hidden in the smithy...<br><br>Thackery had pursued Smith for weeks, craving the knowledge that Smith possessed...<br><br>Huddled together in the flickering candlelight of the cramped smithy, Smith’s hammer rang out, each strike weaving words into shape...<br><br>“Butt,” whispered Head, a note of warning in his voice, “there’s something strange in the air tonight.” His sharp eyes scanned the darkened room...<br><br>“The author is here,” he said, his hammer clanging down on the anvil, sending an eerie resonance through the room. “But he won’t get what he’s looking for.”<br><br>Se full story in the category "Forged stories".
                </p>
              </div>
            </div>
            --> onMaterialClick: #buildTemplate:
            <div class="subContainer" id="buildTemplate"> <!--kopiera in BAAA som template-->
              <h3 id="itemTitel">Material titel</h3><p>Price: <span class="price">150</span> SEK</p>
              <div class="itemDescriptionContainer">
                <p id="itemDescription">Material description: Amid swirling mist and shadowed streets, the clock struck midnight. Lanterns cast a faint glow upon weathered cobblestones, echoing footsteps lingering in the cold. </p>
              </div>
              <div class="itemExampleContainer">
                <p id="itemExample">Material example: Amid swirling mist and shadowed streets, the clock struck midnight. Lanterns cast a faint glow upon weathered cobblestones, echoing footsteps lingering in the cold. A figure in a worn cloak paused, glancing over his shoulder, where silence whispered secrets long buried. Somewhere, a hidden door creaked, and mystery beckoned forward.</p>
              </div>
              <div id="customizer">
                <div>
                  <h4>Customize your material</h4>
                  <div class="form" id="form">
                    <!--Add customation options-->
                  </div>
                </div>
              </div>
            </div>
             */}
          </div>
          <div id="addMaterialDiv">
            {/* Add buttons: 
            <button id="addMaterial">-- Add to Selection --</button>
            <button id="startTutorial">-- Start Tutorial --</button> */}
          </div>
        </section>
        <section class="container selection">
          <div class="subContainer" id="selectionHeader">
            <h2 id="selectionTitle">Made Selection</h2>
            <div id="selectionInfo">
              <div class="slectionNrItems">
                {/* title: Materials:
                nr of items: iterate */}
              </div>
              <div class="selectionPrice">
                <h4>Price: </h4><h4 id="selectionPrice">0000</h4>
              </div>
            </div>
          </div>
          <div class="subContainer selectionItems">
            <ul id="selectionItemDetails">
              {/* Add items from Card */}
            </ul>
          </div>
          <div class="toForge">
            <button id="toForge">To Forge</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
