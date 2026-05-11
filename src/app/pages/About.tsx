import { Link } from "react-router-dom";


import { Heart, Star, Users, Award } from "lucide-react";

export function About() {
  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1762605135012-56a59a059e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600"
          alt="من نحن"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="text-[#f5c2c2] text-sm tracking-widest uppercase mb-3">قصتنا</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">من نحن</h1>
            <p className="text-white/70 max-w-lg">
              رحلة من الشغف بالأزياء السودانية إلى بناء براند يُعبّر عن هوية المرأة السودانية بكل فخر
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-gray-500 text-sm">
          <Link to="/" className="hover:text-[#9b3c52]">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">من نحن</span>
        </p>
      </div>

      {/* Brand Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-3">البداية</p>
              <h2 className="text-gray-900 text-3xl font-bold mb-6 leading-relaxed">
                قصة بدأت بحلم وانتهت بمتجر يُحب
              </h2>
              <p className="text-gray-600 leading-loose mb-5">
                في عام 2018، انطلقت   TEIAB ALKANDAKA    من خيط شغف حقيقي بالزي السوداني الأصيل. مؤسسة المتجر كانت تحلم دائماً بمكان يجمع بين جمال التراث السوداني وروح الموضة العصرية.
              </p>
              <p className="text-gray-600 leading-loose mb-5">
                بدأت بخياطة التوبات السودانية يدوياً وتصميمها بأسلوب مختلف، يجمع بين النقشة الكلاسيكية السودانية وخطوط التصميم الحديثة التي تناسب المرأة العصرية.
              </p>
              <p className="text-gray-600 leading-loose">
                اليوم، Sister Store For Elegant أصبحت وجهة آلاف النساء السودانيات اللواتي يبحثن عن الأناقة الأصيلة والجودة التي لا تُقاوم.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.pinimg.com/1200x/6a/3f/1b/6a3f1bb9179a2e584888cffba230da41.jpg"
                alt="قصة البراند 1"
                className="aspect-[3/4] object-cover w-full"
              />
              <img
                src="https://i.pinimg.com/736x/33/8b/e8/338be82eca2bad4789ecccfa440c6b6a.jpg"
                alt="قصة البراند 2"
                className="aspect-[3/4] object-cover w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#9b3c52] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: Users, number: "+500", label: "عميلة سعيدة" },
              { icon: Award, number: "+200", label: "منتج مميز" },
        
              { icon: Heart, number: "5", label: "خبرة" },
            ].map(({ icon: Icon, number, label }, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon size={32} className="text-white/70 mb-3" />
                <p className="text-[20px] font-black mb-1">{number}</p>
                <p className="text-white/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">ما يقودنا</p>
            <h2 className="text-gray-900 text-3xl font-bold">رؤيتنا وهدفنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] p-10">
              <div className="w-12 h-12 bg-[#9b3c52] flex items-center justify-center mb-6">
                <Star size={22} className="text-white" fill="white" />
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-loose text-sm">
                أن نكون البراند السوداني الأول في عالم الأزياء الفاخرة، نُصدّر جمال الهوية السودانية للعالم من خلال تصاميم تفخر بها كل امرأة سودانية.
              </p>
            </div>
            <div className="bg-[#9b3c52] p-10">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-6">
                <Heart size={22} className="text-[#9b3c52]" fill="#9b3c52" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">هدفنا</h3>
              <p className="text-white/80 leading-loose text-sm">
                تمكين المرأة السودانية من التعبير عن نفسها بثقة وأناقة، وتوفير أزياء عالية الجودة تُلبّي ذوقها الرفيع وتناسب مناسباتها المختلفة بأسعار عادلة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">ما يميزنا</p>
            <h2 className="text-gray-900 text-3xl font-bold">قيمنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "الأصالة",
                desc: "نحرص على توظيف عناصر التراث السوداني الأصيل في كل تصميم نقدمه، من الأقمشة إلى النقشات التقليدية.",
              },
              {
                title: "الجودة",
                desc: "نختار أجود الخامات ونتعاون مع أمهر الحرفيين لضمان جودة كل قطعة تصل إلى يديكِ.",
              },
              {
                title: "الحداثة",
                desc: "نواكب أحدث صيحات الموضة العالمية ونطوّعها لتتناسب مع ذوق وثقافة المرأة السودانية العصرية.",
              },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-[#9b3c52]">
                <h3 className="text-gray-900 font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-gray-900 text-[25px] font-bold">من كواليس   </h2>
            <h2 className="text-gray-900 text-[25px] font-bold">  TEIAB ALKANDAKA </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1770777352860-509edd406ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
              "https://images.unsplash.com/photo-1762796159022-6771e710aced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
              "https://images.unsplash.com/photo-1758613655976-e8c8f85849a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
              "https://images.unsplash.com/photo-1523260578934-e9318da58c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
              "https://images.unsplash.com/photo-1728487234854-c35578502fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
              "https://images.unsplash.com/photo-1765691893497-4b3d3989ddb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
            ].map((img, i) => (
              <div key={i} className="overflow-hidden group">
                <img
                  src={img}
                  alt={`صورة ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a1a1a] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-3xl font-bold mb-4">
            انضمي إلى عائلة Sister Store
          </h2>
          <p className="text-gray-400 mb-8">
            اكتشفي تشكيلتنا وكوني جزءاً من قصة الأناقة السودانية
          </p>
          <Link
            to="/sudanese-top"
            className="inline-flex items-center gap-2 bg-[#9b3c52] text-white px-10 py-4 text-sm font-semibold hover:bg-[#7d2f42] transition-colors"
          >
            تسوق الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
