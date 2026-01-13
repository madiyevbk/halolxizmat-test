export default function handler(req, res) {
  const { category } = req.query;

  const data = {
    santexnik: [
      { id: "1", full_name: "Akmal usta", rating: 4.9, reviews_count: 120, city: "Tashkent", is_verified: true },
      { id: "2", full_name: "Javohir usta", rating: 4.7, reviews_count: 80, city: "Tashkent", is_verified: false }
    ],
    elektrik: [
      { id: "3", full_name: "Sardor usta", rating: 4.8, reviews_count: 64, city: "Tashkent", is_verified: true }
    ]
  };

  res.status(200).json(data[category] ?? []);
}
