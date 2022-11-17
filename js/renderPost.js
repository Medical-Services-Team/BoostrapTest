const handleGetData = async (filename) => {
    const jsonData = await fetch(filename);
    const data = await jsonData.json();
    console.log(data);
    return data
};

const handleRenderPosts = async () => {
    const posts = await handleGetData(
        "info.json"
    );
    let content = "";
    posts.forEach((i, index) => {
        content += `
<a href="#" class="btn btn-light">
<div class="resume-section-content">
    <div class=" d-flex flex-md-row">
        <div class=" card" style="width: 15rem;margin: 10px;">
            <img src="${i.img}"
                class="card-img-top" alt="...">
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
</div>
</a>
    `;
    });
    document.getElementById("postsResult").innerHTML = content;
}

window.onload = () => {
    handleRenderPosts();
}
