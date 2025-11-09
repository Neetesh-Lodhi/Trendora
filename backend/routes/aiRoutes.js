import express from "express";
import axios from "axios"; // or axios

const router = express.Router();

router.post("/recommend", async (req, res) => {
  try {
    const { items, products } = req.body;

    // Simple AI logic (you can later replace with OpenAI API or ML model)
    const categories = items.map((i) => i.category);
    const recommended = products.filter((p) => categories.includes(p.category));

    res.json({
      success: true,
      recommendations: recommended.slice(0, 4),
    });
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    res.status(500).json({ success: false, message: "AI failed to recommend" });
  }
});

export default router;
