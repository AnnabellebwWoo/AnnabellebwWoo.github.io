import Logo from '@/components/Logo/Logo';
import NavBar from '../components/NavBar/NavBar';
import BlogCard from '../components/BlogCard/BlogCard'
import Intro from '@/components/Intro/Intro';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Logo></Logo>
      <NavBar></NavBar>
      <Intro></Intro>
      <BlogCard></BlogCard>
      <Footer></Footer>
    </>
  );
}
