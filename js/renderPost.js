const handleGetData = async (path) => {
    const jsonData = await fetch(path);
    const data = await jsonData.json();
    console.log(data);
    return data
  };

window.onload = async () => {
    
    const posts = await handleGetData("/js/info.json");

    let content = "";
    posts.forEach((i, index) => {
        content += `
<div class= "col">
    <div class=" card" style="width: 15rem;margin: 10px;">
        <img src="${i.img}" alt="...">
            <div style="margin-left: 5%;">
                <h5 class="card-title" value="example" style="text-align: left;">
                ${i.NameOfDiscussion}
                </h5>
                <div class="d-flex flex-md-row">
                    <p class="card-text">${i.Member}</p>
                    <p class="card-text">．</p>
                    <p class="card-text">${i.postList}</p>
                </div>
            </div>
        <button class="btn btn-secondary">
            <i class="fa fa-lock"></i>尚未解鎖
        </button>
    </div>
</div>
    `;
    });
    document.getElementById("postsResult").innerHTML = content;
}