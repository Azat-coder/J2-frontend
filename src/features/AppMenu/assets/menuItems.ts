export const menuItems = [
  {
    label: 'Главное',
    items: [{ label: 'Дашборд', icon: 'pi pi-fw pi-home', to: '/' }],
    icon: 'pi pi-fw pi-id-card',
  },
  {
    label: 'Автозаказ',
    items: [
      { label: 'Товары', icon: 'pi pi-fw pi-id-card', to: '/products' },
      { label: 'Объекты', icon: 'pi pi-fw pi-check-square', to: '/objects' },
      { label: 'Контрагенты', icon: 'pi pi-fw pi-bookmark', to: '/contractors' },
      { label: 'Цепочки', icon: 'pi pi-fw pi-exclamation-circle', to: '/chains' },
      {
        label: 'Календари',
        icon: 'pi pi-fw pi-calendar',
        class: 'rotated-icon',
        to: '/calendars',
        items: [
          {
            label: 'Календари',
            icon: 'pi pi-calendar',
            to: '/calendars',
          },
          {
            label: 'Справочник календарей',
            icon: 'pi pi-sitemap',
            to: '/calendars/catalog',
          },
          {
            label: 'Реестр привязок календарей',
            icon: 'pi pi-list',
            to: '/calendars/register',
          },
        ],
      },
      { label: 'Политики', icon: 'pi pi-fw pi-table', to: '/policies' },
      { label: 'Промо', icon: 'pi pi-fw pi-list', to: '/promo' },
    ],
  },
  {
    label: 'Документы',
    items: [
      {
        label: 'Документы заказов',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Магнит',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Шоколад темный "Milka"', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Кетчуп томатный "Uncle Benz"', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Кетчуп сливочный "Rama"', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Лента',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Молоко "Домик в деревне"', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
      {
        label: 'Отложенные заказы',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Магнит',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Шоколад темный "Milka"', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Кетчуп томатный "Uncle Benz"', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Лента',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Хлеб уральский', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
    ],
  },
  {
    label: 'Прогноз',
    items: [
      { label: 'Динамика остатков', icon: 'pi pi-fw pi-eye', to: '/leftover_dynamics' },
      { label: 'Новинки/Аналоги', icon: 'pi pi-fw pi-eye', to: '/analogs' },
      { label: 'Push', icon: 'pi pi-fw pi-eye', to: '/push' },
      { label: 'Расчет параметров', icon: 'pi pi-fw pi-eye', to: '/params_evaluation' },
      { label: 'Менеджмент прогноза', icon: 'pi pi-fw pi-eye', to: '/forecast_management' },
      { label: 'График проверки прогноза', icon: 'pi pi-fw pi-eye', to: '/forecast_schedule' },
      { label: 'Массовая корректировка', icon: 'pi pi-fw pi-eye', to: '/mass_correction' },
      { label: 'План пополнения', icon: 'pi pi-fw pi-eye', to: '/replenishment_plan' },
      {
        label: 'Ссылка на гугл',
        icon: 'pi pi-fw pi-globe',
        url: 'https://www.google.com',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Начало работы',
    items: [
      {
        label: 'Что умеет автозаказ',
        icon: 'pi pi-fw pi-question',
        to: '/documentation',
      },
      {
        label: 'Документация',
        icon: 'pi pi-fw pi-pencil',
        to: '/documentation',
      },
      {
        label: 'Поддержка',
        icon: 'pi pi-fw pi-search',
        url: 'https://github.com/primefaces/sakai-vue',
        to: '/documentation',
      },
    ],
  },
];
