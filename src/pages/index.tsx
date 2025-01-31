import { SillyHero } from "@/components/silly-hero";
import { SillyCard } from "@/components/silly-card";

export function Index() {
  return (
    <>
      <SillyHero />
      <section className="container pb-8 pt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <SillyCard
            title="Почему я здесь?"
            emoji="🤔"
            content="Потому что интернет нужен не только для серьёзных вещей! Иногда нужно просто посмеяться."
            isWobbling
          />
          <SillyCard
            title="Что тут делать?"
            emoji="🎮"
            content="Нажимать на кнопки, смотреть на забавные анимации и радоваться жизни!"
          />
          <SillyCard
            title="Кто это создал?"
            emoji="🤖"
            content="Очень умный ИИ, который решил, что миру нужно больше веселья!"
            isWobbling
          />
        </div>
      </section>
    </>
  );
}