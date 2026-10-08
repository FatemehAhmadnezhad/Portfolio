/* =====================================================================
   پروژه: صفحه‌آرایی و طراحی جلد مجله تخصصی هنر و دیزاین
   فایل:  projects/08-art-magazine.js
   ===================================================================== */
registerProject({

    /* ----- اطلاعات پایه ----- */
    id: '8',
    title: 'صفحه‌آرایی و طراحی جلد مجله تخصصی هنر و دیزاین',
    category: 'مجله',
    mainGroup: 'magazine_group',
    score: 9.5,                       // امتیاز (برای مرتب‌سازی «منتخب‌ها»)
    date: '۱۴۰۲/۰۶/۳۰',

    /* ----- مشخصات پروژه ----- */
    client: 'انتشارات هنر مدرن',
    role: 'مدیر هنری و صفحه آرا',
    tools: 'InDesign, Photoshop',
    style: 'تحریریه‌ای مدرن (Editorial Modernism)',
    colorPalette: ['#0f172a', '#38bdf8', '#e2e8f0', '#0284c7'],

    /* ----- تصاویر ----- */
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    galleryRow1: [
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80'
    ],
    galleryRow2: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],

    /* ----- توضیحات ----- */
    description: 'صفحه‌آرایی ۶۴ صفحه مجله همراه با طراحی جلد جذاب، تایپوگرافی چندستونی و اینفوگرافیک‌های داخلی.',
    designApproach: `<p>استفاده از گرید چندستونی دقیق این‌دیزاین برای خوانایی راحت متون طولانی و جذابیت بصری تصاویر.</p>`,
    approachImage: '',

    /* ----- تایپوگرافی ----- */
    typoFont: 'فونت یکان بخت / Vazirmatn',
    typoWeight: 'Regular, Medium, Heavy',
    typoSize: 'تیتر مقالات: ۳۲pt | متن مقاله: ۱۰.۵pt',
    typoSampleImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    typography: 'تنظیم دقیق فاصله خطوط (Leading) و کشیدگی حروف جهت مطالعه بی‌خستگی متون مجله.',
    typoDescImage: ''

});
