/* =====================================================================
   قالب پروژه جدید
   ---------------------------------------------------------------------
   ۱) این فایل را کپی کنید و با نام دلخواه (انگلیسی، بدون فاصله) ذخیره کنید
      مثال: projects/07-mohandessalam-podcast.js
   ۲) اطلاعات را پر کنید.
   ۳) نام فایل (بدون .js) را به آرایه‌ی projects/manifest.js اضافه کنید.
   ===================================================================== */
registerProject({

    /* ----- اطلاعات پایه ----- */
    id: '7',
    title: 'طراحی کاور پادکست مهندس سلام',
    category: 'کاور پادکست',
    mainGroup: 'poster_group',
    score: 9,
    date: 'پاییز 1401',

    /* ----- مشخصات پروژه ----- */
    client: 'انجمن علمی مهندسی صنایع دانشگاه خوارزمی',
    role: 'طراح پوستر و گرافیک',
    tools: 'Illustrator, Photoshop',
    style: 'مدرن / ترکیبی',
    colorPalette: ['#08ADE9', '#212543', '#FF5E98'],

    /* ----- تصاویر ----- */
    coverImage: 'image/mohandessalam_podcast/podcast_cover_mohandes_salam-00.png',
    galleryRow1: [
       'image/mohandessalam_podcast/podcast_cover_mohandes_salam-00.png',
        'image/mohandessalam_podcast/podcast_cover_mohandes_salam-01.png'
        
    ],
    galleryRow2: [
        'image/mohandessalam_podcast/podcast_cover_mohandes_salam-03.png',
       'image/mohandessalam_podcast/podcast_cover_mohandes_salam-02.png'
    ],

    /* ----- توضیحات ----- */
    description: 'طراحی کاور و هویت بصری پادکست مهندس سلام مربوط به انجمن علمی مهندسی صنایع دانشگاه خوارزمی.',
    designApproach: `
        <p>طراحی کاور پادکست «مهندس سلام» با هدف ایجاد ارتباط بصری قوی و مدرن با مخاطبان دانشگاهی و هواداران مباحث مهندسی صنایع انجام شده است.</p>
        <p>در این پروژه سعی شده عناصر نمادین مهندسی صنایع با ساختاری پویا و جذاب ترکیب شوند تا در بسترهای پخش پادکست جلوه‌ای متمایز داشته باشند.</p>
    `,
    approachImage: '',

    /* ----- تایپوگرافی ----- */
    typoFont: 'IRANSans',
    typoWeight: 'Bold',
    typoSize: 'عنوان: ۲۸pt | متن: ۱۴pt',
    typoSampleImage: '',
    typography: `استفاده از تایپوگرافی خوانا و مدرن جهت تثبیت نام پادکست در ذهن مخاطب و ایجاد هماهنگی بصری با عناصر گرافیکی.`,
    typoDescImage: ''

});
