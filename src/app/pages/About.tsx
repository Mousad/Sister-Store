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
                في عام 2025 انطلقت   Sabah Line | Abayas     من خيط شغف حقيقي بالزي السوداني الأصيل. مؤسسة المتجر كانت تحلم دائماً بمكان يجمع بين جمال التراث السوداني وروح الموضة العصرية.
              </p>
              <p className="text-gray-600 leading-loose mb-5">
                بدأت بخياطة التوبات السودانية يدوياً وتصميمها بأسلوب مختلف، يجمع بين النقشة الكلاسيكية السودانية وخطوط التصميم الحديثة التي تناسب المرأة العصرية.
              </p>
              <p className="text-gray-600 leading-loose">
                اليوم، Sabah Line | Abayas    أصبحت وجهة آلاف النساء السودانيات اللواتي يبحثن عن الأناقة الأصيلة والجودة التي لا تُقاوم.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671744343_17897652786438818_1082259666253622743_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NDY4MzE1NTIxNDYxMjY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BPcAydmZIbcQ7kNvwEpUqcT&_nc_oc=AdrCHyj8uO0CchaWteDEnxllLDeZqlTavWB2gCmgMUcHSQxS6g-7coJe4HqBgIGU5jQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=bz4LN-zJ_CkjGZ5C1Md9GA&_nc_ss=7a22e&oh=00_Af6LNykfUeap44MFe9x06dmhDyOfaBRnp77l2XfbO2el-w&oe=6A0EFFC8"
                alt="قصة البراند 1"
                className="aspect-[3/4] object-cover w-full"
              />
              <img
                src="https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/672999014_17897176668438818_8822519780005888371_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzg4MjYwNjc5NzEzMDk4NDc5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=r4cl501TjSsQ7kNvwFTDE1q&_nc_oc=Adp3E1omjNbepM4Jtqwoy2M_rOxM8zLE6QGc1VwoHiEkIvNCbsxlcLyctiXCx-i-Qjc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=rBoA7aFXm8hVH_YjQgDeYg&_nc_ss=7a22e&oh=00_Af4A2mpu-myHlSclm1iI8lytIdAwmdeZKKc7VuBgnEkM9Q&oe=6A0F06D6"
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
            <h2 className="text-gray-900 text-[25px] font-bold">  TOOB FOR LESS </h2>
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
            انضمي إلى عائلة  
          </h2>
          <h2 className="text-white text-3xl font-bold mb-4">
           TOOB FOR LESS
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
