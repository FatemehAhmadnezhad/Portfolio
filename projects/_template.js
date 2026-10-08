/* =====================================================================
   قالب پروژه جدید
   ---------------------------------------------------------------------
   ۱) این فایل را کپی کنید و با نام دلخواه (انگلیسی، بدون فاصله) ذخیره کنید
      مثال: projects/12-my-new-project.js
   ۲) اطلاعات را پر کنید.
   ۳) نام فایل (بدون .js) را به آرایه‌ی projects/manifest.js اضافه کنید.

   نکته‌ها:
   - متن‌های چندخطی یا دارای تگ HTML را داخل بک‌تیک ( ` ) بنویسید؛
     در این حالت می‌توانید راحت Enter بزنید و نیازی به \n نیست.
   - متن‌های تک‌خطی را می‌توانید داخل کوتیشن ساده ' ' بنویسید.
   - اگر داخل متنِ ' ' از علامت ' استفاده می‌کنید، قبل از آن \ بگذارید.
   - بعد از آخرین فیلد (typoDescImage) ویرگول نگذارید.
   - فیلدی که نمی‌خواهید را خالی بگذارید: '' یا [].
   - اگر id را ننویسید، نام فایل به‌عنوان id استفاده می‌شود؛ id باید یکتا باشد.
   ===================================================================== */
registerProject({

    /* ----- اطلاعات پایه ----- */
    id: '12',
    title: 'عنوان پروژه',
    category: 'لوگو',                 // باید یکی از دسته‌بندی‌های موجود در فیلتر سایت باشد
    mainGroup: 'branding_group',      // branding_group | poster_group | magazine_group | infographic_group
    score: 9,                         // امتیاز (برای مرتب‌سازی «منتخب‌ها»)
    date: 'زمستان 1405',

    /* ----- مشخصات پروژه ----- */
    client: 'نام کارفرما',
    role: 'طراح',
    tools: 'Illustrator, Photoshop',
    style: 'سبک طراحی',
    colorPalette: ['#000000', '#ffffff', '#ff0000'],

    /* ----- تصاویر ----- */
    coverImage: 'image/my_project/cover.jpg',
    galleryRow1: [
        'image/my_project/01.jpg',
        'image/my_project/02.jpg'
    ],
    galleryRow2: [
        'image/my_project/03.jpg',
        'image/my_project/04.jpg',
        'image/my_project/05.jpg'
    ],

    /* ----- توضیحات ----- */
    description: 'توضیح کوتاه پروژه',
    designApproach: `
        <p>پاراگراف اول رویکرد طراحی...</p>
        <p>پاراگراف دوم...</p>
    `,
    approachImage: 'image/my_project/01.jpg',

    /* ----- تایپوگرافی ----- */
    typoFont: 'IRANSans',
    typoWeight: 'Bold',
    typoSize: 'عنوان: ۲۴pt | متن: ۱۲pt',
    typoSampleImage: 'image/my_project/02.jpg',
    typography: `توضیح درباره تایپوگرافی
می‌توانید در چند خط بنویسید.`,
    typoDescImage: ''

});
