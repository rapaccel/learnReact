import { useState } from "react";

const Create = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [tag, setTag] = useState("");
  const [kategori_id, setKategori] = useState("1");
  const [thumbnail, setThumbnail] = useState("");
  const [isPending,setIsPending]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("isi", isi);
    formData.append("tag", tag);
    formData.append("kategori_id", kategori_id);
    formData.append("thumbnail", thumbnail);
    setIsPending(true)
    fetch("http://127.0.0.1:8000/api/tambah-blog", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setIsPending(false)
        console.log("Blog berhasil ditambahkan", data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error.message);
      })
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Judul Blog :</label>
        <input
          type="text"
          required
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        <label>Tag :</label>
        <input
          type="text"
          required
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <label>Thumbnail :</label>
        <input
          type="file"
          required
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
        <label>Blog Isi:</label>
        <textarea
          required
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        ></textarea>
        <label>Blog Kategori:</label>
        <select
          value={kategori_id}
          onChange={(e) => setKategori(e.target.value)}
        >
          <option value="1">mario</option>
          <option value="2">yoshi</option>
        </select>
        { !isPending &&<button>Add Blog</button>}
        { isPending &&<button>Adding Blog</button>}
      </form>
    </div>
  );
};



export default Create;
