
export default function CsxlAboutPage() {

    return (
    <div className="bg-[#F3EDF7] w-full h-screen p-4">
        <h1 className="text-2xl font-bold">About the XL</h1>
        <div className="w-2xl mt-4 bg-[#FCF8F8] rounded-2xl">
            <img className=" rounded-t-2xl" src="https://cs.unc.edu/wp-content/uploads/sites/1265/2023/11/image-2.png" />
            <div className="flex flex-col gap-2 p-4">
                <p className=" text-xl font-medium">Welcome to the CS Experience Labs!</p>
                <p className="font-bold">Find us in Sitterson 156</p>
                <div className="text-sm text-slate-700 flex flex-col gap-2">
                    <p><strong className="font-semibold">CSXL</strong> is a technical <strong className="font-semibold">experience accelerator, community hub, and coworking space</strong> for undergraduate students at UNC Chapel Hill.</p>
                    <p>We are an inclusive community passionate about personal growth, professional development, and practical experience with tech.</p>
                    <p>Our goal is to kick-start succesful careers in software engineering, user experience design, production engineering, and product management.</p>
                    <p>We host collaborative workshops for students who want to learn by making.</p>
                    <p>Our Coworking Space is found in Sitterson Hall and is available for students to collaborate on side projects and course work.</p>
                </div>
            </div>
        </div>
    </div>
    )
}