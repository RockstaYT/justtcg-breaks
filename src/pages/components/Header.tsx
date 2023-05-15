import Image from "next/image";

export default function Header() {
  return (
    <nav class="flex h-14 items-center justify-around border">
      <div class="flex items-center">
        <a href="/">
          <Image
            src="https://www.placehold.co/150x100"
            width={150}
            height={100}
            alt="Logo Image"
          />
        </a>
        <a href="/contact" class="p-3.5">
          Contact
        </a>
      </div>
      <a href="/cart">Shopping Icon</a>
    </nav>
  );
}
