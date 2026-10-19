/* eslint-disable no-console */
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Development seed.
 * Seeds ONLY real catalog data and reference settings — never fake customers,
 * payments, orders, or testimonials. All seed rows are identifiable by slug/key.
 */
async function main() {
  console.log('🌱 Seeding GreenNiche catalog + settings...')

  // ---- Categories ----
  const categories = await Promise.all(
    [
      { slug: 'gari', name: 'Gari', description: 'Premium processed cassava' },
      { slug: 'animal-feed', name: 'Animal Feed', description: 'Cassava-peel animal feed' },
      { slug: 'charcoal', name: 'Charcoal', description: 'Cassava-peel charcoal' },
      { slug: 'starch', name: 'Starch', description: 'Natural cassava starch' },
    ].map((c) =>
      prisma.category.upsert({
        where: { slug: c.slug },
        update: { name: c.name, description: c.description },
        create: c,
      })
    )
  )
  const [gariCat, feedCat, charcoalCat, starchCat] = categories

  // ---- Products (only Gari has a configured price; the rest are price-on-request) ----
  const products = [
    {
      slug: 'gari',
      name: 'Gari',
      summary: 'Premium processed cassava — our flagship product.',
      description:
        'Premium processed cassava produced using GreenNiche’s circular production model. ' +
        'A staple food ready for students, households, food vendors, market women, schools and institutional canteens.',
      categoryId: gariCat.id,
      basePrice: new Prisma.Decimal(60), // configurable; documented market range GH₵60–75
      priceVisible: true,
      canOrderOnline: true,
      unit: 'pack',
      isActive: true,
      featured: true,
    },
    {
      slug: 'animal-feed',
      name: 'Animal Feed',
      summary: 'Nutritious feed from cassava peels for livestock farmers.',
      description:
        'Animal feed produced from cassava peels, turning a processing by-product into a useful product ' +
        'for livestock farmers, poultry farmers and agricultural cooperatives.',
      categoryId: feedCat.id,
      basePrice: null,
      priceVisible: false,
      canOrderOnline: false, // request a quote
      unit: 'bag',
      isActive: true,
      featured: true,
    },
    {
      slug: 'charcoal',
      name: 'Charcoal',
      summary: 'Charcoal from cassava peels — cleaner community energy.',
      description:
        'Charcoal produced from cassava peels as part of the circular production model. ' +
        'For households, food vendors, small businesses and community energy users.',
      categoryId: charcoalCat.id,
      basePrice: null,
      priceVisible: false,
      canOrderOnline: false, // request a quote
      unit: 'bag',
      isActive: true,
      featured: true,
    },
    {
      slug: 'starch',
      name: 'Starch',
      summary: 'Natural cassava starch — charcoal binder and industrial use.',
      description:
        'Natural starch extracted from cassava dewatering liquid and used as a binding agent in charcoal production. ' +
        'Suitable for charcoal producers, industrial users and potential future export customers.',
      categoryId: starchCat.id,
      basePrice: null,
      priceVisible: false,
      canOrderOnline: false, // request a quote
      unit: 'kg',
      isActive: true,
      featured: true,
    },
  ]

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        summary: p.summary,
        description: p.description,
        categoryId: p.categoryId,
        basePrice: p.basePrice === null ? null : new Prisma.Decimal(p.basePrice),
        priceVisible: p.priceVisible,
        canOrderOnline: p.canOrderOnline,
        unit: p.unit,
        isActive: p.isActive,
        featured: p.featured,
      },
      create: p,
    })
    // Ensure an inventory row exists for each product.
    const product = await prisma.product.findUnique({ where: { slug: p.slug } })
    if (product) {
      await prisma.inventory.upsert({
        where: { productId: product.id },
        update: {},
        create: { productId: product.id, onHand: 0, reserved: 0, minThreshold: 0, reorderLevel: 0 },
      })
    }
  }

  // ---- Reference product images (use the supplied photos; captions to be confirmed) ----
  const gariProduct = await prisma.product.findUnique({ where: { slug: 'gari' } })
  if (gariProduct) {
    await prisma.productImage.upsert({
      where: { id: 'seed-gari-img-1' },
      update: {},
      create: {
        id: 'seed-gari-img-1',
        productId: gariProduct.id,
        url: '/images/gn-image-1.jpg',
        altText: 'GreenNiche product image — caption to be confirmed',
        position: 0,
      },
    })
  }

  // ---- Business settings (configurable; pending confirmation where noted) ----
  const settings: { key: string; value: string; notes: string }[] = [
    { key: 'business.name', value: 'GreenNiche Enterprise', notes: 'Verified' },
    { key: 'business.phone', value: '0256673127', notes: 'Verified' },
    { key: 'business.email', value: 'clementkwasiannan01@gmail.com', notes: 'Verified' },
    {
      key: 'business.location',
      value: 'Central Region, Ghana',
      notes: 'PENDING CONFIRMATION: brief references both Old Ebu and Abuenu. Confirm before publishing full address.',
    },
    { key: 'business.founder', value: 'Clement Kwasi Annan', notes: 'Verified' },
    { key: 'business.tagline', value: 'Zero Waste. Full Value. Processing the Future.', notes: 'Verified' },
    { key: 'business.closing', value: 'We are not just processing Gari. We are processing the future.', notes: 'Verified' },
    { key: 'gari.price_range', value: '60-75', notes: 'Verified range per market conditions (GH₵). Configurable.' },
    {
      key: 'production.cycle_total_cost',
      value: '1645',
      notes: 'Baseline GH₵1,645 reference (configurable, not constant). Cassava ~0.5t → 21 packs.',
    },
    {
      key: 'award.compassion_2025',
      value: 'Most Financially Sound Business — Compassion Business Challenge 2025',
      notes: 'Verified',
    },
    {
      key: 'award.ecopreneurship_2026',
      value: 'Shortlisted — Ecopreneurship Challenge 2026',
      notes: 'Verified',
    },
  ]
  for (const s of settings) {
    await prisma.businessSetting.upsert({
      where: { key: s.key },
      update: { value: s.value, notes: s.notes },
      create: s,
    })
  }

  // ---- Notification templates (dev mode; provider sends when configured) ----
  const templates = [
    {
      key: 'order.confirmation',
      channel: 'WHATSAPP' as const,
      subject: null,
      body: 'Hello {{customerName}}, we have received your order {{orderReference}}. Total: GH₵{{total}}. We will update you as it progresses. — GreenNiche Enterprise',
    },
    {
      key: 'order.status_update',
      channel: 'WHATSAPP' as const,
      subject: null,
      body: 'Your order {{orderReference}} is now: {{status}}. Thank you for choosing GreenNiche.',
    },
  ]
  for (const t of templates) {
    await prisma.notificationTemplate.upsert({
      where: { key: t.key },
      update: { body: t.body },
      create: t,
    })
  }

  // ---- Delivery zones (configurable; fees are placeholders to confirm) ----
  const zones = [
    { name: 'Old Ebu / Abuenu (local)', fee: new Prisma.Decimal(0), estimatedDays: 'Same day' },
    { name: 'Cape Coast & environs', fee: new Prisma.Decimal(20), estimatedDays: '1–2 days' },
    { name: 'Central Region (wider)', fee: new Prisma.Decimal(40), estimatedDays: '2–3 days' },
    { name: 'Other regions (Ghana)', fee: new Prisma.Decimal(80), estimatedDays: '3–5 days' },
  ]
  for (const z of zones) {
    await prisma.deliveryZone.upsert({
      where: { name: z.name },
      update: {},
      create: { name: z.name, fee: z.fee, estimatedDays: z.estimatedDays, regions: [], isActive: true },
    })
  }

  console.log('✅ Seed complete.')
  console.log('   - 4 categories, 4 products (Gari priced; 3 price-on-request), inventories, 1 product image')
  console.log('   - 11 business settings, 2 notification templates, 4 delivery zones (fees PENDING confirmation)')
  console.log('')
  console.log('NOTE: No admin user is seeded for security. Create the first Super Admin via:')
  console.log('  npm run ts-node scripts/create-admin.ts -- --email=... --password=... --name=...')
  console.log('  (script is implemented in the auth feature step)')
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
