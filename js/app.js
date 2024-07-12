function loadBlogData() {
  document.getElementById('blog').innerHTML =
    `
      <div style="display: flex; justify-content: center; justify-items: center; width: 100%;">
        <div style="margin-top: 12px">
          <p class="main-text" style="margin-left: 1px;">Loading...</p>
          <div style="display: flex; justify-content: center; justify-items: center; width: 100%">
            <img src="img/loading.gif" style="margin-top: 4px; pointer-events: none">
          </div>
        </div>
      </div>
    `;
  fetch("https://gist.githubusercontent.com/Widget365/bdbdead005517994e09aac5edfd02d1f/raw/809f2df31cbfa0a3969b66a416c35ad5590e9666/blog.json")
    .then(async response => {
      var resText = await response.text();
      var res = JSON.parse(resText);
      var innerHTML = "";
      for (var i = 0; i < res.length; i++) {
        var post = res[i];
        innerHTML +=
          `
            <div style="height: 151px; width: 100%; border-bottom-width: 1px; border-bottom-color: #03338f">
              <p class="main-text" style="margin-top: 6px; margin-left: 16px; text-shadow: 1px 1px black;">${post.title} - ${post.date}</p>
              <div style="display: flex; flex-direction: row">
                <div style="width: 64%; margin-left: 4px; margin-top: 4px">
                  <p class="threeish-text" style="text-shadow: 1px 1px black;">${post.body}</p>
                </div>
                <div style="width: 36%; height: 136px;">
                  <div style="width: 139px; height: 114px; margin: auto; margin-top: 6px; overflow: hidden;">
                    <img style="margin-top: ${-114 * (3 - Math.floor(i / 4))}px; margin-left: ${-139 * (2 - (i % 3))}px; pointer-events: none" src="https://raw.githubusercontent.com/Widget365/VRCProjectSupplementals/main/blogimages.png">
                  </div>
                </div>
              </div>
          `;
        if (i < res.length - 1) {
          innerHTML +=
            `
                <div style="background-color: rgba(0,0,0,0.32); height: 1px;"></div>
              </div>
            `;
        }
        else {
          innerHTML += `</div>`
        }
      }
      document.getElementById('blog').innerHTML = innerHTML;
    });
}
