export const menuItems = [
  {
    label: 'Главное',
    items: [{ label: 'Дашборд', icon: 'pi pi-fw pi-home', to: '/' }],
    icon: 'pi pi-fw pi-id-card',
  },
  {
    label: 'Путешествия',
    items: [
      { label: 'Товары', icon: 'pi pi-fw pi-id-card', to: '/products' },
      { label: 'Объекты', icon: 'pi pi-fw pi-check-square', to: '/objects' },
      { label: 'Контрагенты', icon: 'pi pi-fw pi-bookmark', to: '/contractors' },
      { label: 'Уведомления', icon: 'pi pi-fw pi-exclamation-circle', to: '/notifications' },
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
    label: 'Ссылки',
    items: [
      {
        label: 'Ссылка на гугл',
        icon: 'pi pi-fw pi-globe',
        url: 'https://www.google.com',
        target: '_blank',
      },
    ],
  },
];
