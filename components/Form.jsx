import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="home">
            <h1 >
                <span className='orange_gradient'>{type} Post</span>
            </h1>
            <p>
                {type} and share amazing prompts with the world, and let your
                imagination run wild with any AI-powered platform
            </p>
            <form
                className="promt-form"
                onSubmit={handleSubmit}>

                <label>
                    <span >
                        Your AI Prompt
                    </span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Write your post here...'
                        required

                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Field of Prompt{" "}
                        <span className='font-normal'>
                            (#product, #webdevelopment, #idea, etc.)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='#Tag'
                        required
                        className='form_input'
                    />
                </label>

                <div className='btn_wrapper'>
                    <Link href='/' className='outline_btn'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='orange_btn'
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>)
}

export default Form