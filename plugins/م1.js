let handler = async (m, { conn, command, text }) => {
let love = `
مرحبا😘
---------------
اهلا بيك في بوت زينون احنا هنا في خدمتك دايما🥰
اليك قائمة اوامر التنزيلات

✥━─━⌬〘👾〙⌬━─━✥
يجبلك الاغنيه من اليوتيوب علي هيئه ملف للحفظ ف الهاتف
.اغنيه-ملف 

يحملك من اليوتيوب ب الرابط
.تحميل


تحميل فديو من اليوتيوب ب الاسم
.فيديو 

يبحثلك علي الفيديو في اليوتيوب ب الاسم
 .سيرش

✥━─━⌬〘👾〙⌬━─━✥

تحميل من الفيس ب الرابط

.فيس

✥━─━⌬〘👾〙⌬━─━✥

يجبلك فديو من الانستقرام ب الرابط

 .انستا

✥━─━⌬〘👾〙⌬━─━✥

تحميل من التيك توك ب الرابط

.تيك 

يحملك صور من التيك

 .تيك-صوره
✥━─━⌬〘👾〙⌬━─━✥

يبعتلك اغنيه علي هيئه صوت ب الاسم
 .اغنيه 

✥━─━⌬〘👾〙⌬━─━✥

يبحثلك في جوجل 

.جوجل 

✥━─━⌬〘👾〙⌬━─━✥

يجبلك صوره من جوجل

 .صوره

✥━─━⌬〘👾〙⌬━─━✥

يجبلك ملف البرنامج من بلاي ستور

.تطبيق 

✥━─━⌬〘👾〙⌬━─━✥

يجبلك صور من بينتريست

.بينت

✥━─━⌬〘👾〙⌬━─━✥

 يحملك من اسبوتيفاي

 .اسبوتي 

✥━─━⌬〘👾〙⌬━─━✥
 لاي مشكلة يمكنك التواصل معنا من خلال
www.zenonsoftware.com
او عن طريق كتابة الامر
.ابلاغ (كتابه تفاصيل مشكلتك)
---------------
All ©️ Copyright Reserved Zenonsoftware
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(التنزيلات)$/i
export default handler
