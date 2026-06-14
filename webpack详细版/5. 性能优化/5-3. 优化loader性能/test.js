const os = require('os');

// ★：cpus(): CpuInfo[]; Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
console.log(os.cpus().length); // 12（逻辑处理器）
console.log(os.cpus());
/**
 * [
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 29861750,
 *       nice: 0,
 *       sys: 52406390,
 *       idle: 113134390,
 *       irq: 2937437
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 25192203,
 *       nice: 0,
 *       sys: 42751656,
 *       idle: 127458437,
 *       irq: 703562
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 33691953,
 *       nice: 0,
 *       sys: 53194250,
 *       idle: 108516093,
 *       irq: 434125
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 27586093,
 *       nice: 0,
 *       sys: 44755156,
 *       idle: 123061046,
 *       irq: 289484
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 29045343,
 *       nice: 0,
 *       sys: 49777843,
 *       idle: 116579109,
 *       irq: 518640
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 25857109,
 *       nice: 0,
 *       sys: 45565531,
 *       idle: 123979656,
 *       irq: 381046
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 31038171,
 *       nice: 0,
 *       sys: 49967312,
 *       idle: 114396812,
 *       irq: 422671
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 26358750,
 *       nice: 0,
 *       sys: 43807640,
 *       idle: 125235906,
 *       irq: 288359
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 31657765,
 *       nice: 0,
 *       sys: 47441328,
 *       idle: 116303203,
 *       irq: 663062
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 23385234,
 *       nice: 0,
 *       sys: 36142140,
 *       idle: 135874906,
 *       irq: 343171
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 28204468,
 *       nice: 0,
 *       sys: 42392031,
 *       idle: 124805781,
 *       irq: 412312
 *     }
 *   },
 *   {
 *     model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
 *     speed: 2994,
 *     times: {
 *       user: 24977750,
 *       nice: 0,
 *       sys: 39361125,
 *       idle: 131063406,
 *       irq: 397625
 *     }
 *   }
 * ]
 */
