const products = [
  {
    id: "product1",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571370986.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571370986.jpg&w=200&q=75",
    title: {
      shortTitle: "The Lock-up",
      longTitle: "Banville John",
    },

    price: {
      quantity: 0,
      mrp: 15.25,
      cost: 10.5,
      discount: "47%",
      isbn: 154121135612312,
    },
    description:
      "The ultimate page-turner.' Irish Independent 'Like drinking Bollinger when your usual tipple is Babycham.' ",
    discount: "Extra 10% Off",
    tagline: "Banville John",
    category: "book",
    subcategory: "comedy",
  },
  {
    id: "product2",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781844885756.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781844885756.jpg&w=200&q=75",
    title: {
      shortTitle: "Strange Sally ",
      longTitle: "Nugent Liz",
    },
    price: {
      mrp: 20.5,
      cost: 15.5,
      discount: "40%",
      isbn: 154121135612312,
    },
    description:
      "**Selected for BBC 2 Between the Covers 2023** From the Number 1 bestselling author of Our Little Cruelties and Skin Deep Sally Diamond ",
    discount: "From 99+5% Off",
    tagline: "Nugent Liz",
  },
  {
    id: "product3",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636514.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636514.jpg&w=200&q=75",
    title: {
      shortTitle: "No One Saw ",
      longTitle: "Morton Kate",
    },
    price: {
      mrp: 20.75,
      cost: 17.5,
      discount: "66%",
      isbn: 1254121135612312,
    },
    description:
      "From the bestselling author of The Clockmaker's Daughter , Kate Morton, comes a breathtaking mystery of love.",
    discount: "Upto 70% Off",
    tagline: "Morton Kate",
  },
  {
    id: "product4",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571368709.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571368709.jpg&w=200&q=75",
    title: {
      shortTitle: "Small Things ",
      longTitle: "Keegen Claire",
    },
    price: {
      mrp: 22.5,
      cost: 12.5,
      discount: "42%",
      isbn: 112456781231,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - .",
    discount: "Grab Now",
    tagline: "Keegen Claire",
  },
  {
    id: "product5",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008517021.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008517021.jpg&w=200&q=75",
    title: {
      shortTitle: "Death Under ",
      longTitle: "Abell Stig",
    },
    price: {
      mrp: 19.5,
      cost: 14.5,
      discount: "40%",
      isbn: 1124526781231,
    },
    description:
      "The stunningly written, evocative new debut crime thriller you won't want to miss! ",
    discount: "From 19.50",
    tagline: "Abell Stig",
  },
  {
    id: "products6",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571332786.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571332786.jpg&w=200&q=75",
    title: {
      shortTitle: "Old Gods Time TPB",
      longTitle: "Barry Sebastian",
    },
    price: {
      mrp: 19.5,
      cost: 14.5,
      discount: "40%",
      isbn: 1234122122,
    },
    description:
      "THE SUNDAY TIMES TOP TEN BESTSELLER TWICE WINNER OF THE COSTA BOOK OF THE YEAR 'Full of love and heartache",
    discount: "From 19.50",
    tagline: "Barry Sebastian",
  },
  {
    id: "products7",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787300835.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787300835.jpg&w=200&q=75",
    title: {
      shortTitle: "My Father's House",
      longTitle: "O Connor Joseph",
    },
    price: {
      mrp: 15.5,
      cost: 14.5,
      discount: "40%",
      isbn: 123411221222,
    },
    description:
      "THE SUNDAY TIMES TOP TEN BESTSELLER TWICE WINNER OF THE COSTA BOOK OF THE YEAR 'Full of love and heartache, this is an unforgettable novel from one of our finest writers.' DOUGLAS STUART 'Shocking, stunning and extraordinarily brave. Barry has once again written a character for the ages.' LIZ NUGENT Recently retired policeman Tom Kettle is settling into the quiet of his new home, a lean-to annexed to a Victorian castle overlooking the Irish Sea. For months he has barely seen a soul, catching only glimpses of his eccentric landlord and a nervous young mother who has moved in next door. Occasionally, fond memories return, of his family, his beloved wife June and their two children. But when two former colleagues turn up at his door with questions about a decades-old case, one which Tom never quite came to terms with, he finds himself pulled into the darkest currents of his past. A beautiful, haunting novel, in which nothing is quite as it seems, Old God's Time is about what we live through, what we live with, and what may survive of us.",
    discount: "From 19.50",
    tagline: "O Connor Joseph",
  },
  {
    id: "products8",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008567200.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008567200.jpg&w=200&q=75",
    title: {
      shortTitle: "No Apologies",
      longTitle: "Orbinski Niamh",
    },
    price: {
      mrp: 25.5,
      cost: 17.5,
      discount: "42%",
      isbn: 12341221222,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "Grab Now",
    tagline: "Orbinski Niamh",
  },
  {
    id: "products9",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008517021.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008517021.jpg&w=200&q=75",
    title: {
      shortTitle: "Honey, Baby, Mine",
      longTitle: "Dern Laura & Ladd Diane",
    },
    price: {
      mrp: 25.5,
      cost: 17.5,
      discount: "42%",
      isbn: 12341221220,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - ",
    discount: "Grab Now",
    tagline: "Dern Laura & Ladd Diane",
  },
  {
    id: "products10",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197545.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197545.jpg&w=200&q=75",
    title: {
      shortTitle: "Caz Mooney's  ",
      longTitle: "Mooney Caz",
    },
    price: {
      mrp: 18,
      cost: 17.5,
      discount: "42%",
      isbn: 1234122121,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times -",
    discount: "Grab Now",
    tagline: "Mooney Caz",
  },
  {
    id: "products11",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781999379964.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781999379964.jpg&w=200&q=75",
    title: {
      shortTitle: "Tapas",
      longTitle: " Carbrera Anna ",
    },
    price: {
      mrp: 15,
      cost: 27.5,
      discount: "42%",
      isbn: 223123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "Extra 10% Off",
    tagline: "Carbrera Anna ",
    category: "book",
    subcategory: "comedy",
  },
  {
    id: "products12",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781444957655.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781444957655.webp&w=200&q=75",
    title: {
      shortTitle: "Heartstopper Volume ",
      longTitle: " Oseman Alice",
    },
    price: {
      mrp: 12.59,
      cost: 10.5,
      discount: "22%",
      isbn: 2231223123,
    },
    description:
      "**  Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES .",
    discount: "Extra 20% Off",
    tagline: "Oseman Alice",
  },
  {
    id: "products13",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399718592.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399718592.webp&w=200&q=75",
    title: {
      shortTitle: "The Murderer ",
      longTitle: " McGee Harry",
    },
    price: {
      mrp: 25.59,
      cost: 17.5,
      discount: "29%",
      isbn: 22231223123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "Extra 20% Off",
    tagline: "McGee Harry",
    category: "book",
    subcategory: "comedy",
  },
  {
    id: "products14",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399724821.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399724821.webp&w=200&q=75",
    title: {
      shortTitle: "The Exchange",
      longTitle: "Grisham John",
    },
    price: {
      mrp: 24.99,
      cost: 17.5,
      discount: "10%",
      isbn: 22231212121,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "From 40",
    tagline: "Mooney Caz",
  },
  {
    id: "products15",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
    title: {
      shortTitle: "The Last Devil To Die",
      longTitle: "Osman Richard",
    },
    price: {
      mrp: 20.99,
      cost: 17.5,
      discount: "10%",
      isbn: 222312121212,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "Grab Now",
    tagline: "Osman Richard",
  },
  {
    id: "products16",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526662521.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526662521.jpg&w=200&q=75",
    title: {
      shortTitle: "Hotel 21 TPB",
      longTitle: "Rich Senta",
    },
    price: {
      mrp: 20.99,
      cost: 17.5,
      discount: "10%",
      isbn: 123422222,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-10%",
    tagline: "Rich Senta",
  },
  {
    id: "products17",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529089592.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529089592.jpg&w=200&q=75",
    title: {
      shortTitle: "Not Alone",
      longTitle: " Jackson Sarah K",
    },
    price: {
      mrp: 40.99,
      cost: 17.5,
      discount: "45%",
      isbn: 1234222222,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-10%",
    tagline: " Jackson Sarah K",
  },
  {
    id: "products18",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978034%2F9780349016658.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978034%2F9780349016658.jpg&w=200&q=75",
    title: {
      shortTitle: "Red Bird Sings TPB",
      longTitle: " Fitzpatrick Aoife",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 12342222221,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "Grab Now",
    tagline: "Fitzpatrick Aoife",
  },
  {
    id: "products19",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781804182451.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781804182451.jpg&w=200&q=75",
    title: {
      shortTitle: "The Polite Act ",
      longTitle: " Hurtubise Charleen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 123422222012,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Hurtubise Charleen",
  },
  {
    id: "products20",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781788452618.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781788452618.webp&w=200&q=75",
    title: {
      shortTitle: "Max and Chaffy!",
      longTitle: "Smart Jamie",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 123422222012,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Smart Jamie",
  },
  {
    id: "products21",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241251805.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241251805.jpg&w=200&q=75",
    title: {
      shortTitle: "Only Dull People",
      longTitle: " Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 1234212222012,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products22",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978190%2F9781909889378.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978190%2F9781909889378.jpg&w=200&q=75",
    title: {
      shortTitle: "Granta 154: I've Been",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 55123123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products23",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781789091502.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781789091502.jpg&w=200&q=75",
    title: {
      shortTitle: "Cursed",
      longTitle: "Georges Simenon",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 155123123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Georges Simenon",
  },
  {
    id: "products24",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048050.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048050.jpg&w=200&q=75",
    title: {
      shortTitle: "Cursed",
      longTitle: "GP.g. Wodehouse",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 1355123123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "GP.g. Wodehouse",
  },
  {
    id: "products25",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
    title: {
      shortTitle: "Landfall 235",
      longTitle: "Virginia Woolf",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 43123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Virginia Woolf",
  },
  {
    id: "products50",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227932.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227932.jpg&w=200&q=75",
    title: {
      shortTitle: "Pride and Prejudice",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products26",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
    title: {
      shortTitle: "Orwell on Freedom",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 143123123,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products27",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227864.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227864.jpg&w=200&q=75",
    title: {
      shortTitle: "The Little Prince",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 1431231231,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products28",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
    title: {
      shortTitle: "Alice in Wonderland ",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 14312312231,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products29",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780007420087.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780007420087.jpg&w=200&q=75",
    title: {
      shortTitle: "Dracula P/B (Collins Classics)",
      longTitle: "Stoker Bram",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 143123122131,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Stoker Bram",
  },
  {
    id: "products30",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978190%2F9781909889378.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978190%2F9781909889378.jpg&w=200&q=75",
    title: {
      shortTitle: "Granta 154: I've Been",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 123221122131,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products31",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
    title: {
      shortTitle: "Everything",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 1541213561231,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products32",
    url: "https://www.dubraybooks.ie/_next/image?url=%2Fassets%2Fimg%2Fplaceholder.png&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=%2Fassets%2Fimg%2Fplaceholder.png&w=200&q=75",
    title: {
      shortTitle: "The New Golden",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 15412135612311,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products33",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978876%2F9788763541411.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978876%2F9788763541411.jpg&w=200&q=75",
    title: {
      shortTitle: "Classica Et Mediaevalia",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 154121356112311,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products34",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048371.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048371.jpg&w=200&q=75",
    title: {
      shortTitle: "Landfall. 243",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
      isbn: 154121356112311,
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products35",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787301405.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787301405.jpg&w=200&q=75",
    title: {
      shortTitle: "Orwell on Freedom",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products36",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529098457.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529098457.jpg&w=200&q=75",
    title: {
      shortTitle: "Exiles",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products37",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241988268.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241988268.jpg&w=200&q=75",
    title: {
      shortTitle: "The Little Prince",
      longTitle: "Thursday Murder",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Thursday Murder",
  },
  {
    id: "products38",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571363605.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978057%2F9780571363605.jpg&w=200&q=75",
    title: {
      shortTitle: "April In Spain P/B",
      longTitle: "Banville John",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Banville John",
  },
  {
    id: "products39",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920044.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920044.webp&w=200&q=75",
    title: {
      shortTitle: "Bioloco Plant Easy Cup -Watercolour Birds ",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products40",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920043.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920043.webp&w=200&q=75",
    title: {
      shortTitle: "Bioloco Plant Easy Cup -Plant Friends ",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products41",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920039.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9920039.webp&w=200&q=75",
    title: {
      shortTitle: "Bioloco Plant Easy Cup -Out of Office ",
      longTitle: "Banville John",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Banville John",
  },
  {
    id: "products42",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978019%2F9780199535989.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978019%2F9780199535989.jpg&w=200&q=75",
    title: {
      shortTitle: "The Picture of Dorian Gray Book ",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products43",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526628220.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526628220.jpg&w=200&q=75",
    title: {
      shortTitle: "House of Sky ",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products44",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978191%2F9781915071262.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978191%2F9781915071262.jpg&w=200&q=75",
    title: {
      shortTitle: "GhostLord's ",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products45",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008554606.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008554606.jpg&w=200&q=75",
    title: {
      shortTitle: "Fall of the School",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products46",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781471192500.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781471192500.jpg&w=200&q=75",
    title: {
      shortTitle: "Night We Got Stuck In A Story",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products47",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978133%2F9781338801910.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978133%2F9781338801910.jpg&w=200&q=75",
    title: {
      shortTitle: "Dog Man 11 Twenty Thousand Fleas Under",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products48",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452939.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452939.jpg&w=200&q=75",
    title: {
      shortTitle: "Loshins oof(Collins Classics)",
      longTitle: "Stoker Bram",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Stoker Bram",
  },
  {
    id: "products51",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452618.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452618.jpg&w=200&q=75",
    title: {
      shortTitle: "Granta 154: I've Been",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products52",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241392256.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241392256.jpg&w=200&q=75",
    title: {
      shortTitle: "Everything",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products53",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241417492.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241417492.jpg&w=200&q=75",
    title: {
      shortTitle: "Cursed",
      longTitle: "Georges Simenon",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Georges Simenon",
  },
  {
    id: "products54",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978144%2F9781444968903.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978144%2F9781444968903.jpg&w=200&q=75",
    title: {
      shortTitle: "Cursed",
      longTitle: "GP.g. Wodehouse",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "GP.g. Wodehouse",
  },
  {
    id: "products55",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008197056.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008197056.jpg&w=200&q=75",
    title: {
      shortTitle: "Landfall 235",
      longTitle: "Virginia Woolf",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Virginia Woolf",
  },
  {
    id: "products56",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526624802.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526624802.jpg&w=200&q=75",
    title: {
      shortTitle: "Orwell on Freedom",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products57",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978055%2F9780552177993.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978055%2F9780552177993.jpg&w=200&q=75",
    title: {
      shortTitle: "Only Dull People",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products58",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978140%2F9781408889510.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978140%2F9781408889510.jpg&w=200&q=75",
    title: {
      shortTitle: "The Seven Death",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products59",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529386691.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529386691.jpg&w=200&q=75",
    title: {
      shortTitle: "Lousie Penny",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products60",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781847399410.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781847399410.jpg&w=200&q=75",
    title: {
      shortTitle: "White City Kevin Power Book",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products61",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9890016.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9890016.jpg&w=200&q=75",
    title: {
      shortTitle: "A5 Make a Mark",
      longTitle: "Antoine Saint-Exupery",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Antoine Saint-Exupery",
  },
  {
    id: "products62",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9890015.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9890015.webp&w=200&q=75",
    title: {
      shortTitle: "A5 Make a Mark",
      longTitle: "Wilde Oscar",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Wilde Oscar",
  },
  {
    id: "products63",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9798986093024.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9798986093024.jpg&w=200&q=75",
    title: {
      shortTitle: "Damian Ortega",
      longTitle: "Jane Austen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Jane Austen",
  },
  {
    id: "products64",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F979898%2F9798986048338.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F979898%2F9798986048338.jpg&w=200&q=75",
    title: {
      shortTitle: "What Matters",
      longTitle: "Georges Simenon",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Georges Simenon",
  },
  {
    id: "products65",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978140%2F9781408890042.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978140%2F9781408890042.jpg&w=200&q=75",
    title: {
      shortTitle: "Circle P/B",
      longTitle: "Miller Madeline",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Miller Madeline",
  },
  {
    id: "products66",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241988336.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241988336.jpg&w=200&q=75",
    title: {
      shortTitle: "Women of Troy P/B",
      longTitle: "Pat Barker",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Pat Barker",
  },
  {
    id: "products67",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781472223821.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781472223821.jpg&w=200&q=75",
    title: {
      shortTitle: "Hamnet",
      longTitle: "O Farrel Maggie",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Pat Barker",
  },
  {
    id: "products68",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529091144.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529091144.jpg&w=200&q=75",
    title: {
      shortTitle: "Haven TPN Roman Emma",
      longTitle: "Emma Donoghue",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Emma Donoghue",
  },
  {
    id: "products69",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9780571382019.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9780571382019.webp&w=200&q=75",
    title: {
      shortTitle: "So Late in the Day",
      longTitle: "Claire Keegen",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Claire Keegen",
  },
  {
    id: "products70",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
    title: {
      shortTitle: "The Last devil",
      longTitle: "Richard Osman",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Richard Osman",
  },
  {
    id: "products72",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
    title: {
      shortTitle: "TThe Trap",
      longTitle: "Catherine Ryan",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Catherine Ryan",
  },
  {
    id: "products73",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978139%2F9781399712927.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978139%2F9781399712927.jpg&w=200&q=75",
    title: {
      shortTitle: "Holly",
      longTitle: "Stephen King",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Stephen King",
  },
  {
    id: "products75",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
    title: {
      shortTitle: "A Thread of Violence",
      longTitle: "Mark O`Connel",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Mark O`Connel",
  },
  {
    id: "products76",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781786051912.webp&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781786051912.webp&w=200&q=75",
    title: {
      shortTitle: "Sean Quinn",
      longTitle: "Sean Quinn",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Sean Quinn",
  },
  {
    id: "products77",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197224.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197224.jpg&w=200&q=75",
    title: {
      shortTitle: "Wise",
      longTitle: "Elaine Harris",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Elaine Harris",
  },
  {
    id: "products78",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529146516.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529146516.jpg&w=200&q=75",
    title: {
      shortTitle: "The Daiary",
      longTitle: "Steven Bartlet",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Steven Bartlet",
  },
  {
    id: "products79",
    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717195992.jpg&w=200&q=75",
    detailUrl:
      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717195992.jpg&w=200&q=75",
    title: {
      shortTitle: "Is Irelan Neutral?",
      longTitle: "Gallagher Connor",
    },
    price: {
      mrp: 20.99,
      cost: 16.5,
      discount: "45%",
    },
    description:
      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
    discount: "-20%",
    tagline: "Gallagher Connor",
  },
];

module.exports = products;
