import{d as e,r as n,s,c as t}from"../../_/nitro.mjs";import"node:async_hooks";const a=e((async e=>{const{contactInfo:a,answers:o}=await n(e),r=`\nЗдравствуйте! Меня зовут ${a.name}.\nМой номер телефона: ${a.phone}.\nВот мои предпочтения:\n\n- Площадь: ${o.area}\n- Конфигурация: ${o.configuration.name} (${o.configuration.title})\n- Количество проемов: ${o.doorways.text}\n- Тип установки: ${o.installation}\n- Тип крепления: ${o.mount}\n- График: ${o.schedule}\n\n${a.message?`Дополнительное сообщение: ${a.message}`:""}\n  `;if(!r)return s(e,t({statusCode:400,message:"Необходимо указать chatId и сообщение."}));try{const e=await $fetch("https://api.telegram.org/bot8141959117:AAEepDUMRWkLExLZOm5nN-kjxnWdjWVYvMM/sendMessage",{method:"POST",body:{chat_id:6017439095,text:r,parse_mode:"HTML"}});if(e)return{success:!0,message:"Сообщение успешно отправлено!"};throw console.error("Ответ от Telegram:",e),new Error("Ошибка при отправке сообщения в Telegram")}catch(n){return console.error("Ошибка отправки сообщения в Telegram:",n),s(e,t({statusCode:500,message:"Ошибка при отправке сообщения."}))}}));export{a as default};
//# sourceMappingURL=send-message.mjs.map
