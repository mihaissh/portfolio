import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized');

// Ensure optimized directory exists
if (!existsSync(OPTIMIZED_DIR)) {
  mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

const profileImagePath = join(PUBLIC_DIR, 'profile.jpg');

async function optimizeProfileImage() {
  console.log('🖼️  Optimizing profile image...\n');

  try {
    // Generate WebP versions at different sizes for responsive display
    // Display size is 64x64 (size-16 in Tailwind)
    // Generate for 1x, 2x, and 3x displays
    const sizes = [
      { width: 64, suffix: '64w' },    // 1x display
      { width: 128, suffix: '128w' },  // 2x display (Retina)
      { width: 192, suffix: '192w' },  // 3x display (high-DPI mobile)
    ];

    for (const size of sizes) {
      // Generate WebP version
      await sharp(profileImagePath)
        .resize(size.width, size.width, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(join(OPTIMIZED_DIR, `profile-${size.suffix}.webp`));

      console.log(`✅ Created profile-${size.suffix}.webp`);

      // Generate fallback JPG version
      await sharp(profileImagePath)
        .resize(size.width, size.width, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 85 })
        .toFile(join(OPTIMIZED_DIR, `profile-${size.suffix}.jpg`));

      console.log(`✅ Created profile-${size.suffix}.jpg`);
    }

    // Generate a single optimized version for Open Graph/Twitter meta tags (400x400)
    await sharp(profileImagePath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile(join(OPTIMIZED_DIR, 'profile-og.webp'));

    console.log(`✅ Created profile-og.webp`);

    await sharp(profileImagePath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85 })
      .toFile(join(OPTIMIZED_DIR, 'profile-og.jpg'));

    console.log(`✅ Created profile-og.jpg`);

    console.log('\n✨ Image optimization complete!');
    console.log('\n📊 Estimated savings: ~3.5 MB per page load');
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeProfileImage();

