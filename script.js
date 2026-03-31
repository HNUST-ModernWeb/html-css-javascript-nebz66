// 获取 DOM 元素（就是找到页面上那些标签）
const avatarInput = document.getElementById('avatarInput'); // 文件输入框
const avatarImg = document.getElementById('avatarImg');     // 显示图片的地方
const nameInput = document.getElementById('nameInput');     // 姓名输入框
const bioInput = document.getElementById('bioInput');       // 简介输入框
const saveBtn = document.getElementById('saveBtn');         // 保存按钮

// --- 1. 头像上传功能 ---
// 监听文件选择框的变化事件
avatarInput.addEventListener('change', function(e) {
    // 检查用户是否选择了文件
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        // 创建一个临时的 URL 指向这个文件
        const imageUrl = URL.createObjectURL(file);
        // 把这个 URL 赋值给 img 的 src 属性，实现预览
        avatarImg.src = imageUrl;
    }
});

// --- 2. 保存功能 ---
saveBtn.addEventListener('click', function() {
    // 获取输入框里的最新内容
    const newName = nameInput.value;
    const newBio = bioInput.value;

    // 这里可以加个简单的判断，防止名字为空
    if (newName.trim() === "") {
        alert("姓名不能为空！");
        return;
    }

    // 如果你的作业要求“保存后更新页面显示”（通常作业是要求保存到本地或只是刷新显示）
    // 这里演示：点击保存后，输入框失去焦点（模拟保存完成状态）
    nameInput.blur();
    bioInput.blur();

    // 提示用户保存成功
    alert("✅ 信息已保存！\n姓名：" + newName + "\n简介：" + newBio);
});
