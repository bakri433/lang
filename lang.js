var eng = document.getElementById("eng");
var ara = document.getElementById("ara");

ara.onclick = function(){
    document.getElementById("main").innerHTML ="هذه الصفحة لعرض الكلام بأكثر من لغة، وهي ليست أكثر من اختبار";
    document.getElementById("section").innerHTML = "جافا سكريبت وتعرف بشكل شائع باسم هي لغة برمجة عالية المستوى، تستخدم أساساً في متصفحات الويب لإنشاء صفحات أكثر تفاعلية. بدأ استخدام الجافاسكريبت كلغة برمجة موجهة للمبرمجين الهواة وغير المحترفين. إلا أنه تزايد الاهتمام بها وجذبت اهتمام مبرمجين محترفين بعد إضافتها لتقنيات جديدة كانتشار تقنية أجاكس التي أدت إلى سرعة في التفاعل بين الخادم والعميل. تُستخدَم لغة الجافا سكربت في تطوير صفحات ويب تفاعلية، وتطبيقات الويب، بما في ذلك الألعاب، وهي مُستعمَلة من أغلبية المواقع، وتدعمها جميع المتصفحات تقريبًا دون الحاجة إلى إضافات خارجية"
};

eng.onclick = function(){
    document.getElementById("main").innerHTML = "   This page is to display speech in more than one language, and it is nothing more than a test"
 document.getElementById("section").innerHTML = "JavaScript is a high-level programming language, primarily used in web browsers to create more interactive pages. JavaScript began as a programming language intended for amateur and non-professional programmers. However, interest in it increased and attracted the attention of professional programmers after adding new technologies such as the spread of AJAX technology, which led to faster interaction between the server and the client. JavaScript is used in developing interactive web pages and web applications, including games, and is used by most websites and supported by almost all browsers without the need for external add-ons."
}