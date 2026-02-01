// ==============================
// 📘 quiz.js - File chính
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // --- 🧩 1. Danh sách câu hỏi ---
    const questions = [
        { question: "Theo Hồ Chí Minh, đâu là mục đích của việc kết hợp sức mạnh dân tộc với sức mạnh thời đại?", 
            options: ["Để thực hiện mục tiêu dân tộc tự quyết tuyệt đối", "Để tạo ra sức mạnh tổng hợp cho cách mạng thắng lợi.",
                 "Để chờ đợi sự giúp đỡ của các cường quốc.", "Để xóa bỏ hoàn toàn sự khác biệt giữa các dân tộc."], 
            correct: 1 },
        { question: "Trong 'Chiến lược vòng tròn đồng tâm', đối tượng nào nằm ở vòng tròn cốt lõi?", 
            options: ["Phong trào đấu tranh giải phóng dân tộc.", "Các lực lượng yêu chuộng hòa bình, dân chủ.",
                 "Phong trào cộng sản và công nhân quốc tế.", "Các tổ chức phi chính phủ quốc tế."], 
            correct: 2 },
        { question: "Vì sao Hồ Chí Minh coi phong trào giải phóng dân tộc là 'đồng minh tự nhiên' của Việt Nam?", 
            options: ["Vì có cùng hệ tư tưởng tôn giáo.", "Vì có chung kẻ thù là chủ nghĩa đế quốc và cùng nỗi đau bị áp bức.",
                 "Vì có chung đường biên giới lãnh thổ.", "Vì có trình độ phát triển kinh tế tương đồng."], 
            correct: 1 },
        { question: "Hình thức tổ chức đoàn kết quốc tế nào được ví như 'vũ khí mềm' trong tư tưởng Hồ Chí Minh?", 
            options: ["Các liên minh chính trị chặt chẽ.", "Ngoại giao nhân dân qua các hội hữu nghị.",
                 "Các mặt trận quân sự chung.", "Quốc tế Cộng sản."], 
            correct: 1 },
        { question: "Trong mối quan hệ giữa 'Con thuyền' và 'Dòng nước', sức mạnh thời đại đóng vai trò là", 
            options: ["Con thuyền.", "Người chèo lái.",
                 "Cánh buồm.", "Dòng nước."], 
            correct: 3 },
        { question: "Nguyên tắc 'sống còn' trong đoàn kết quốc tế của Hồ Chí Minh là gì?", 
            options: ["Phụ thuộc hoàn toàn vào các nước lớn.", "Độc lập, tự chủ, tự lực cánh sinh.",
                 "Đoàn kết bằng mọi giá, kể cả nhượng bộ chủ quyền.", "Chỉ đoàn kết với những nước giàu mạnh."], 
            correct: 1 },
        { question: "Điểm độc đáo trong nghệ thuật ứng xử quốc tế của Hồ Chí Minh là sự kết hợp giữa:", 
            options: ["Vũ lực và đe dọa.", "Có lý và có tình.",
                 "Kinh tế và quân sự.", "Bí mật và bất ngờ."], 
            correct: 1 },
        { question: "Theo Bác, 'muốn người ta giúp cho, thì trước mình phải...'?", 
            options: ["Biết xin lỗi người ta.", "Tự giúp lấy mình đã.",
                 "Ký kết các hiệp ước quân sự.", "Chấp nhận các điều kiện kinh tế."], 
            correct: 1 },
        { question: "'Chủ nghĩa sô-vanh' bị Hồ Chí Minh phê phán là gì?", 
            options: ["Tình yêu quê hương đất nước nồng nàn.", "Niềm tin mù quáng vào sự ưu việt của dân tộc mình và coi thường dân tộc khác.",
                 "Tinh thần sẵn sàng giúp đỡ bạn bè quốc tế.", "Sự tôn trọng luật pháp quốc tế."], 
            correct: 1 },
        { question: "'Thực lực là cái chuông, ngoại giao là cái tiếng'. Câu nói này nhấn mạnh điều gì?", 
            options: ["Tiếng chuông càng lớn thì ngoại giao càng yếu.", "Ngoại giao là yếu tố quyết định thực lực.",
                 "Thực lực bên trong là cơ sở, nền tảng cho hoạt động ngoại giao.", "Chỉ cần ngoại giao tốt là đủ để chiến thắng."], 
            correct: 2 }, 
        { question: "Nghị quyết nào của Đảng (năm 1993) khẳng định tầm quan trọng của đại đoàn kết dân tộc trong thời kỳ đổi mới?", 
            options: ["Nghị quyết 01/NQ-TW.", "Nghị quyết 07/NQ-TW.",
                 "Nghị quyết 12/NQ-TW.", "Nghị quyết 15/NQ-TW."], 
            correct: 1 },
        { question: "Đại hội XII của Đảng (2016) xác định vị trí của đại đoàn kết dân tộc như thế nào?", 
            options: ["Là mục tiêu phụ trong phát triển kinh tế.", "Là giải pháp tạm thời trong đối ngoại.",
                 "Là đường lối chiến lược, động lực và nguồn lực to lớn.", "Là vấn đề của riêng Mặt trận Tổ quốc."], 
            correct: 2 },
        { question: "Trong hình ảnh 'Cây tre Việt Nam', cái 'Gốc' vững chắc đại diện cho điều gì?", 
            options: ["Sự linh hoạt trong đàm phán.", "Lợi ích quốc gia - dân tộc và khối đại đoàn kết toàn dân.",
                 "Sự viện trợ từ bên ngoài.", "Các hiệp định thương mại tự do."], 
            correct: 1 },
        { question: "Đặc tính nào của cây tre đại diện cho sự 'biến hóa', 'dĩ bất biến ứng vạn biến' trong ngoại giao?", 
            options: ["Gốc vững.", "Thân chắc.",
                 "Cành uyển chuyển.", "Rễ sâu."], 
            correct: 2 },
        { question: "Chính sách quốc phòng '4 Không' của Việt Nam nhằm mục đích gì?", 
            options: ["Để cô lập Việt Nam với thế giới.", "Để không phải đầu tư cho quân sự.",
                 "Để xây dựng sự tin cậy và tránh trở thành 'quân cờ' trong tranh chấp các nước lớn.", "Để từ chối mọi sự giúp đỡ quốc tế."], 
            correct: 2 },
        { question: "Việc Việt Nam nâng cấp quan hệ với Mỹ, Nhật, Trung Quốc, Nga trong thời gian ngắn minh chứng cho điều gì?", 
            options: ["Sự nhu nhược trong chính sách đối ngoại.", "Nghệ thuật thăng bằng và đa phương hóa quan hệ.",
                 "Sự thay đổi hệ tư tưởng chính trị.", "Việc chúng ta đang chọn bên để chống lại nước khác."], 
            correct: 1 },
        { question: "Nền tảng của khối đại đoàn kết toàn dân tộc hiện nay được Đảng ta xác định là liên minh giữa:", 
            options: ["Công nhân - Trí thức - Doanh nhân.", "Công nhân - Nông dân - Doanh nhân.",
                 "Công nhân - Nông dân - Trí thức.", "Nông dân - Trí thức - Kiều bào."], 
            correct: 2 },
        { question: "Ngoại giao Vaccine trong đại dịch COVID-19 là ví dụ điển hình cho việc:", 
            options: ["Chỉ dựa vào nguồn lực nội sinh để chống dịch.", "Kết hợp nhuần nhuyễn sức mạnh dân tộc với đoàn kết quốc tế.",
                 "Từ chối sự hỗ trợ của các nước lớn.", "Chỉ tập trung vào lợi ích kinh tế."], 
            correct: 1 },
        { question: "Phương châm ngoại giao của Việt Nam hiện nay là gì?", 
            options: ["Chỉ làm bạn với các nước láng giềng.", "Là bạn, là đối tác tin cậy và thành viên có trách nhiệm của cộng đồng quốc tế.",
                 "Chỉ quan hệ với các nước xã hội chủ nghĩa.", "Trung lập tuyệt đối và không quan hệ với các cường quốc."], 
            correct: 1 },
        { question: "Mục tiêu xuyên suốt của việc vận dụng tư tưởng Hồ Chí Minh về đoàn kết quốc tế hiện nay là:", 
            options: ["Giữ vững độc lập, tự chủ, vì hòa bình, hợp tác và phát triển.", "Trở thành cường quốc quân sự hàng đầu thế giới.",
                 "Nhận được càng nhiều viện trợ càng tốt.", "Đồng hóa các nền văn hóa khác vào Việt Nam."], 
            correct: 0 },                                    
    ];

    // --- 🎲 2. Lấy ngẫu nhiên 10 câu ---
    function getRandomQuestions() {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 10);
    }

    // --- 🧱 3. Hiển thị quiz ---
    function renderQuiz() {
        const container = document.querySelector(".quiz-container");
        container.innerHTML = "";
        const selected = getRandomQuestions();

        selected.forEach((q, index) => {
            const div = document.createElement("div");
            div.className = "quiz-question";
            div.id = `q${index}`;

            let optionsHTML = q.options.map((opt, i) => `
                <li>
                    <input type="radio" id="q${index}_${i}" name="q${index}" value="${i}">
                    <label for="q${index}_${i}">${opt}</label>
                </li>
            `).join("");

            div.innerHTML = `
                <h4>Câu ${index + 1}: ${q.question}</h4>
                <ul class="quiz-options">${optionsHTML}</ul>
            `;
            container.appendChild(div);
        });

        container.innerHTML += `
            <div class="quiz-controls">
                <button id="submit-quiz-btn" class="quiz-button">Nộp bài</button>
                <button id="reset-quiz-btn" class="quiz-button reset">Làm lại</button>
                <div id="quiz-result"></div>
            </div>
        `;

        document.getElementById("submit-quiz-btn").addEventListener("click", () => checkAnswers(selected));
        document.getElementById("reset-quiz-btn").addEventListener("click", renderQuiz);
    }

    // --- 🧮 4. Chấm điểm ---
    function checkAnswers(selected) {
        let score = 0;
        const questionsDOM = document.querySelectorAll(".quiz-question");

        questionsDOM.forEach((div, i) => {
            const selectedOption = div.querySelector(`input[name="q${i}"]:checked`);
            const labels = div.querySelectorAll("label");
            labels.forEach(l => l.classList.remove("highlight-correct", "highlight-wrong"));

            if (selectedOption) {
                const correctIndex = selected[i].correct;
                if (parseInt(selectedOption.value) === correctIndex) {
                    score++;
                    labels[correctIndex].classList.add("highlight-correct");
                } else {
                    labels[correctIndex].classList.add("highlight-correct");
                    selectedOption.nextElementSibling.classList.add("highlight-wrong");
                }
            } else {
                div.classList.add("unanswered");
            }
        });

        const resultDiv = document.getElementById("quiz-result");
        resultDiv.className = "";
        resultDiv.textContent = `Bạn làm đúng ${score}/${selected.length} câu!`;

        if (score >= selected.length * 0.8) {
            resultDiv.classList.add("success");
            resultDiv.textContent += " 🎉 Rất xuất sắc!";
        } else if (score >= selected.length * 0.5) {
            resultDiv.classList.add("success");
            resultDiv.textContent += " 👍 Khá tốt!";
        } else {
            resultDiv.classList.add("fail");
            resultDiv.textContent += " 😅 Cần xem lại bài nhé!";
        }
    }

    // --- 🚀 5. Gọi khi load trang ---
    renderQuiz();
});
