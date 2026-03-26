---
id: 6
title: "ยังคงโง่และบัดซบ กับงาน Stupid Hackathon in Thailand 7"
description: "มาแชร์ประสบการณ์กันดีกว่าว่า Stupid Hackathon in Thailand ครั้งที่ 7 จะบัดซบแค่ไหน!?"
img: "/articles/shit7/cover.png"
author_id: 1
tags: [events, creatorsgarten, hacktathon, shit7]
date: "June 26, 2023"

image:
  src: "/articles/shit7/cover.png"
head:
  meta:
    - property: "og:title"
      content: "ยังคงโง่และบัดซบ กับงาน Stupid Hackathon in Thailand 7"
    - property: "og:description"
      content: "มาแชร์ประสบการณ์กันดีกว่าว่า Stupid Hackathon in Thailand ครั้งที่ 7 จะบัดซบแค่ไหน!?"
---

แน่นอนว่าเมื่อวานนี้ได้ไปเข้าร่วมงาน แหกกระท้อน ที่มีคุณภาพ (กาว) ดีที่สุดในประเทศไทย (อีกแล้ว) ก็คืองาน **Stupid Hackathon in Thailand** (หรือ **SHiT**) นั่นเองง
เป็นงานที่จัดมาเจ็ดปีแล้ว ส่วนผมก็ได้เข้าตั้งแต่ปีที่แล้วจนมาถึงปีนี้ด้วย ซึ่งใครที่ยังไม่ได้อ่าน [ไปอ่านได้ที่นี่นะ](https://tin.otternoon.com/articles/shit6) ซึ่งในปีนี้เนี่ยเราได้จัดขึ้นที่
**The Knowledge Exchange: KX ชั้น 7 Auditorium** ใหญ่มากกกกก และหนาวมาก หนาวฉิบหาย🥶 (ไม่มี ส ม า ชิ ก ท่านใหนปรับหรอกครับ แต่ไม่รู้ว่าปรับยังไง)
ซึ่งต่างกับปีที่แล้ว (แต่ผมชอบของปีที่แล้วมากกว่านะ บรรยากาศเหมือนครอบครัวดี 🥰) แล้วจะรออะไร มาเข้าเรื่องกันเถอะ

<div class="divider"></div>

## ปีนี้ทำอะไรอีก?

ปีที่เรานัดกันมาก่อนอยู่แล้ว (ไม่เบี้ยวแล้วบิดเหมือน[พี่เรย์](https://github.com/sleepntsheep/)ที่หนีไปทำบ้านสีเหลืองกับ[พี่ลีโอ](https://leomotors.me/)😒)
ซึ่งในปีนี้เราได้ทำส่วนเสริมของ Chrome เพื่อพ่อกัน คร่าว ๆ คือเปลี่ยนทุกรูปเป็นรูปพ่อ เปลี่ยนทุกวิดีโอเป็นเอ็มวีเพลง ๆ หนึ่ง ทำให้สี Background เป็นสีเหลือง
มีเลขไทยเลขหนึ่งตัวใหญ่ ๆ อยู่บนหน้าเว็บ และ Pop-Up รูป ๆ หนึ่งเวลาเข้าทุกเว็บไซต์ ได้รับแรงบันดาลใจมาจาก [โปรเจกต์ long-live-hm ของพี่ลีโอ](https://github.com/leomotors/long-live-hm/)  
ตอน Hacktoberfest Thailand 2022 [ใครยังไม่ได้อ่านอีกก็เชิญทางนี้ครับ 😁](https://tin.otternoon.com/articles/htbf2022/) ได้ไปเห็นเขาทำพอดี เลยเสนอ
ไอเดียมา (แต่ตอนนั้นขี้เกียจทำ) ครึ่งปีผ่านมาก็ตอนนี้ได้ทำละ

โดยมี[พี่ฟอร์ส](https://github.com/buyyakhoo/) [พี่กันต์](https://github.com/rufflogix/) และ[พี่คะนิ้ง](https://www.instagram.com/kng._01k/) มาช่วยกันทำ ซึ่งเราได้ทำเป็นสองส่วน คือส่วนของเว็บไซต์ และส่วนของ Chrome Extension ซึ่งส่วนของเว็บไซต์เราได้ใช้
Tech Stack เป็น [Svelte](https://svelte.dev/) ทำโดยพี่กันต์ทำ แล้วผมก็ไปแจมตอนสุดท้าย แล้วก็ Chrome Extension อันนี้ผมทำเอง พี่ฟอร์สก็ช่วยกันทำ
(ใครอยากได้สไลด์ทัก[ดิสคอร์ด](https://discord.com/users/508473794994896896/)ผมมาได้นะ มันสุ่มเสี่ยงมาก) แต่ถ้า Repo ก็ไปขุด [โปรไฟล์ GitHub ผม](https://github.com/tinarskii/) กันเอาเองนะครับ ถ้าให้ดีก็ [กดปุ่มสปอนเซอร์](https://github.com/sponsors/tinarskii/) ด้วยนะฮะ

จริง ๆ แล้วตอนแรกผมจะเสนอไอเดีย **Silence** แต่ว่ากลัวมันจะน่าเบื่อไป ซึ่งก็คือการที่ทำสไลด์เปล่า ๆ ไม่พูดอะไรจนกว่าจะหมดเวลา ปีหน้าใครอยากมาทำก็มาทำได้นะ😅

![](/articles/shit7/hack1.jpg)<figcaption>บรรยากาศใน Auditorium</figcaption>

<div class="divider"></div>

## ไปซน เอ้ย รู้จักใครมาอีก

นอกจากพี่ทั้ง 3 คนแล้ว ก็ยังได้เจอกับพี่ ๆ ที่เคยเจอในงานก่อน ๆ เช่น[พี่คนนี้แหละ ไม่แน่ใจว่าชื่ออะไร](https://github.com/annibuliful/) ที่ช่วยไป Contribute
Project [มุกแป๊กแป๊ก](https://mukpakpak.vercel.app/) แล้วก็ที่งาน [Hacktoberfest 2022](https://tin.otternoon.com/htbf2022/) ด้วย นอกจากนั้น
ก็ [พี่พู](https://github.com/pumipatw) พี่ที่ทำ[บัญชีหนังหมา](https://github.com/karma-soulbound/)กับผมเมื่อปีที่แล้ว (ปีนี้พี่เขาหนีไปนับเฟรนช์ฟรายส์ซะละ) [พี่บอส](https://github.com/0xNithi) ก็เหมือนจะมาด้วย แต่ผมไม่เห็นนะ
แล้วก็คนที่คงเจอเป็นประจำอยู่แล้ว ขอแปะลิงก์ให้ละกัน [aomkirby12](https://github.com/SaltyAom/) [GusB3ll](https://github.com/gusb3ll/) [dtinth](https://github.com/dtinth/) [Chayapatr](https://github.com/chayapatr/) [Jabont](https://github.com/jabont/)
[Leomotors](https://github.com/leomotors/) [Rayriffy](https://github.com/rayriffy/) และ [narze](https://narze.live/) แล้วก็มี
Youtuber ไมน์คราฟต์ท่านหนึ่งมาด้วย [พี่แท็กเกิ้ล](https://www.youtube.com/@tackle4826mc/)

จริง ๆ ในงานไปเจอคนมาเพียบเลย แต่ว่าไม่ได้ถามชื่อเขา ปีนี้คนในงานมีเยอะมากกก เยอะสุดเลย (150+ คน) มี 30+ กว่าทีม (ถึงไหมไม่รู้ มั่วเลขเอา) ก็คงเจอทุกคนไม่ได้ 😥

![](/articles/shit7/present.jpg)<figcaption>โปรเจกต์เพื่อพ่อ (ขอบคุณพี่หนุ่มฮาฟฟู่วว)</figcaption>

<div class="divider"></div>

## มางานนี้เพราะของกิน

อย่างที่เราทราบกันว่ามางานนี้ผมมาเพื่อ~~มาได้ขนมฟรี~~หาประสบการณ์อ่ะนะ ตอนเช้าก็มีแจกขนม (กินจนหมด) มีเลย์บ้าง มีขนมบลา ๆๆๆ เต็มเลย (ขอบคุณสปอนเซอร์มากครับ)
ส่วนตอนเที่ยงมีข้าวกล่อง (แน่นอนว่าหยิบกระเพราสิครับ รออะไร) ส่วนตอนเย็นมีแจกพิซซ่ากับเบอร์เกอร์ (ขนาดผมรีบวิ่งแล้วนะ ก็ยังไม่ทันอยู่ดี ทันแค่พิซซ่า) อย่างกับหลุดมาจากหนังซอมบี้

ตอนเที่ยง (มั้ง) ของวันแรกก็มีการไปเล่นบอร์ดเกม (Coup) กับพี่หลาย ๆ คนเลย ก็มีพี่ในกลุ่ม แล้วก็พี่อีกคนนึง แล้วก็พี่คนนั้น คนนี้ คนนู้น คนโน้นนนน (ไม่ได้ถามชื่อเขาอ่ะ) ก็สนุกดี
ตอนแรกงง ๆ หลัง ๆ เริ่มเซียนเฉยเลยแหะ มีแบบ online ด้วย ลองไปเล่นได้ [ที่นี่](https://www.chickenkoup.com/) มีพี่[คนนี้ที่ชื่อเท็นเท็นมั้ง](https://github.com/tententgc/) นะถ้าจำได้

![](/articles/shit7/hack2.jpg)<figcaption>บรรยากาศด้านนอก Auditorium</figcaption>

<div class="divider"></div>

## ตอนดึกไปซนอะไรอีก

ไปร้องคาราโอเกะเพลง ๆ หนึ่งมากับพี่ลีโอ 💢 แต่ไม่มีใครได้ยินเพราะเขาน่าจะออกไปกินข้าวกับพี่ไทกันอ่ะนะ ก็เลยซนได้ (แต่ก็ยังมีคนที่เล่นดนตรีอยู่ข้าง ๆ ห้องถึงกับยืนทำความเคารพให้นะ)

มาถึงแล้วเนี่ยช่วงดึกจะไม่มีอะไรมาก มี Flash Talk อยู่ 2-3 คนมั้ง จำได้แค่พี่ไทกับพี่กัส พี่ไทพูดเรื่องการใช้ OpenAI เนี่ยแหละ ส่วนพี่กัสพูดเรื่อง Hentai Ecosystem
แต่เขาบอกให้เด็กหลับตาฟังแล้วใส่หูฟังฟังเพลงอ่ะ เลยไม่รู้ว่าพูดอะไรเลย (จริงจริ๊งงง)😭😭

พี่ลีโอเปิดแข่งเกม [tetr.io](https://tetr.io/) กัน ปีนี้คนชนะไม่เป็นพี่ไทอีกต่อไปแล้ว เพราะว่ามี [Nacnano](https://github.com/nacnano/)
มาล้มล้างพี่ไทได้สำเร็จ เล่นกันไปยาว ๆ ส่วนผมเซิร์ฟหลุดตลอดเลย เลย _นอน_ (ที่แปลว่าเอาเก้าอี้ 3 ตัวมาต่อกันแล้วนอน) ดูยอดนักสืบจิ๋วโคนันดีกว่า (ตอนที่ 70 - 73 คดีฆาตกรรมไนท์บารอนเผื่อใครอยากดู)
นอนไปเรื่อย... ตื่นมา เห้ย!!! พี่หายไปไหนหมด Hall วะ (ตอนนั้นงง ๆ ง่วง ๆ อยู่) เดินไปดูก็ไม่เจอ ตอนนั้นหนาวมากกกกกกกกกกกกกกกกกกกกกกกกก ก็เลยไปอุดอู้
อยู่ที่ห้องน้ำ (อุ่นดี) อ่ะนะ (เผื่อใครสงสัยทำไมผมเข้าบ่อยจัง??) ก็หลับ ๆ ตื่น ๆ ไปเรื่อย ๆ จนถึงเช้าอ่ะนะ สรุปคือพี่แท็กเกิ้ลบอกว่านอนข้างบนมันอุ่น😭😭

<video controls>
  <source src="/articles/shit7/ac.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<figcaption>พี่ลีโอเปิดอะไรอีกแล้ว💢💢🔥🔥</figcaption>

## เริ่มโหวตกันเลย!!

บอกเลยว่าวิธีโหวดปีนี้ WTF มาก ไม่เหมือนปีก่อน คือ ปีนี้ถ้าเราอยากโหวตให้ทีมนี้ ก็ให้เราเขย่าไปเรื่อย ๆ นั่นแหละ อยากพรีเซนต์ไปเขย่าไปก็ได้นะ
ปีนี้ก็อย่างที่บอกว่าทีมมีเยอะมาก ๆ คงลิสต์มาไม่หมด เดี๋ยวผมจะเอาที่ผมชอบมาละกัน ส่วนการแจกรางวัลก็คือจะเป็นเว็บที่มีจุดเต็มเลย แล้วให้เรากดค้างสุ่มว่าลงจุดไหน
มี Jackpot เป็น ฆีฆร K3 มอนิเตอร์ LG ละก็กระเป๋า RGB คันนี่ 😭😭😭 (ปีนี้ Microsoft แจกเสื้อแทนกระติกน้ำ)

<div class="p-2"></div>

### Ask-GPT-SHiT7-😭

แอปทำคลิปสุขสันต์วันเกิดให้เพื่อน มีเสียงพากษ์ด้วย ไปลองกันดู: [Website](https://bd.cunny.dev/) [Demo](https://bd.cunny.dev/pi9y0gpp4/)

<div class="p-2"></div>

### Ramsey's Aveji Kitchen

ไม่รู้จะกินอะไรคลิก. [Website](https://64981799b48fbc736d584a30--lambent-torte-a35d3f.netlify.app/)

<div class="p-2"></div>

### GetMotivated

Stop hornie, be motivated. [GitHub](https://github.com/richeyphu/GetMotivated/)

<div class="p-2"></div>

### Corndog

Machine Learning that will help you distinguish between corndogs and corn dogs. [Website](https://corndog.manhermak.com/)

<div class="p-2"></div>

### YouTube Basic

Youtube-basic は、YouTube Premium ユーザーが広告を視聴することでコンテンツクリエーターを支援したいと考えている人向けに特別に設計された Chrome 拡張機能です。YouTube Premium は通常広告を削除しますが、この拡張機能を使えば広告を続けて視聴し、クリエーターの広告収入に貢献することができます。[ギットハブ](https://github.com/Mixko50/sht7-youtube-basic/)

<div class="p-2"></div>

### SornThaiMaiDai

Ever had trouble learning Thai? Use our AI-juiced up website to power up your learning! [Website](https://khongchai.github.io/SonThaiMaiDai/frontend/index.html/)

![](/articles/shit7/fapuchan.jpg)<figcaption>Reimu vs Faputa</figcaption>

<div class="divider"></div>

## สุดท้ายและสรุป

ก็งานนี้เป็นครั้งที่ 7 แล้วนะฮะ ขอบคุณทั้งสปอนเซอร์และผู้จัดงานมาก ๆ ที่ทำให้งานนี้เกิดขึ้น ถือว่าสนุกมาก ๆ เลย ได้รู้จักคนอื่น ๆ มากขึ้น ~~ได้กินของฟรี~~
ได้สติกเกอร์อีกตามเคย แต่ว่ามีพวกกุญแจขึ้นมาด้วย สวยดี แล้วก็เสื้อ (ที่ผมใส่กลับด้าน) ส่วนสิ่งที่ได้จากงานในปีนี้นะครับก็คือ **_เตรียมเสื้อกันหนาวไปด้วยโว้ย_** แล้วเจอกันใหม่ที่งานครั้งหน้านะฮะ บาย

— ทิน
